import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { HttpsError } from "firebase-functions/lib/providers/https";

const axios = require("axios").default;
// const coconut = require("coconutjs");

admin.initializeApp();

const auth = admin.auth();

// exports.processEmailVerified = functions.region("europe-west3").auth.user().

// On sign up.
exports.processSignUp = functions
  .region("europe-west3") // check https://firebase.google.com/docs/functions/locations to set region as needed
  .auth.user()
  .onCreate(async (user) => {
    if (user.customClaims?.role) return;

    let role = "user";

    if (
      (user.email &&
        user.email.endsWith(
          functions.config().hasura.team_role_email_domain
        )) ||
      (user.email && user.email.endsWith(functions.config().hasura.admin_email))
    ) {
      role = "team";
    }

    try {
      await axios.post(
        functions.config().hasura.endpoint,
        {
          query: `
            mutation UpdateUsername($id: String!, $name: String!, $type:String!) {
              insert_users_one(
                object: { id: $id, name: $name, type: $type }
                on_conflict: { constraint: users_pkey, update_columns: [last_seen, name, type] }
              ) {
                id
                last_seen 
                name
                type
              }
            }
          `,
          variables: {
            id: user.uid,
            name: user.displayName,
            type: role,
          },
        },
        {
          headers: {
            "x-hasura-admin-secret": functions.config().hasura.admin_secret,
          },
        }
      );

      const customClaims = getCustomClaims(role, user.uid);

      await admin.auth().setCustomUserClaims(user.uid, customClaims);

      // Update real-time database to notify client to force refresh.
      const metadataRef = admin.database().ref("metadata/" + user.uid);

      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      return metadataRef.set({ refreshTime: new Date().getTime() });
    } catch (error) {
      return functions.logger.error(error);
    }
  });

exports.processDeletion = functions
  .region("europe-west3") // check https://firebase.google.com/docs/functions/locations to set region as needed
  .auth.user()
  .onDelete(async (user) => {
    await axios.post(
      functions.config().hasura.endpoint,
      {
        query: `
          mutation DeleteUser($id: String!) {
            delete_users_by_pk(id:$id) {
              id
            }
          }
        `,
        variables: {
          id: user.uid,
        },
      },
      {
        headers: {
          "x-hasura-admin-secret": functions.config().hasura.admin_secret,
        },
      }
    );
  });

exports.deleteFile = functions
  .region("europe-west3")
  .https.onRequest((req, res) => {
    if (req.method !== "POST") {
      res.status(400).send("Please send a POST request");
      return;
    }
    if (
      req.get("x-hasura-shared-secret") !==
      functions.config().hasura.shared_secret
    ) {
      res.status(401).send("Unauthorized");
      return;
    }

    if (req.body.event.op !== "DELETE") {
      res.status(405).send(`Method ${req.body.event.op} not allowed`);
      return;
    }

    const key = req.body.event.data.old.key;

    if (!key) {
      res.status(400).send("Payload does not contain a file key");
      return;
    }

    const bucket = admin
      .storage()
      .bucket(functions.config().storage?.dev_bucket);

    bucket
      .deleteFiles({ prefix: key })
      .then(() => {
        functions.logger.log(`file deleted with key: ${key}`);
        res
          .status(200)
          .send(
            `Successfully deleted file '${req.body.event.data.old.originalname}'.`
          );
        return;
      })
      .catch((err) => {
        functions.logger.error(`Failed to remove file, error: ${err}`);
        res.status(404).send(`Failed to remove file, error: ${err}`);
        return;
      });
  });

interface GetAllUsersDataObject {
  role?: string;
}

/**
 * Gets all the users (1000 MAX) from Firebase auth.
 *
 * @param {Object} data Express Request Object.
 * @param {Object} context Express Response Object
 */
exports.getAllUsers = functions
  .region("europe-west3")
  .https.onCall((data: GetAllUsersDataObject, context) => {
    // verify Firebase Auth ID token
    if (!context.auth) {
      throw new HttpsError("unauthenticated", "Authentication Required!", {
        message: "Nice try :)",
      });
    }
    if (!(context.auth.token.role === "team")) {
      throw new HttpsError(
        "permission-denied",
        "Access denied. You're not an admin"
      );
    }

    const maxResults = 1000; // optional arg.
    return auth
      .listUsers(maxResults)
      .then((userRecords) => {
        return userRecords.users
          .sort((a, b) => {
            if (a.customClaims?.role < b.customClaims?.role) return 1;
            if (a.customClaims?.role > b.customClaims?.role) return -1;
            return 0;
          })
          .filter((user) => user.uid !== context.auth?.uid)
          .filter((user) => {
            return data.role ? user.customClaims?.role === data.role : true;
          })
          .map((user) => {
            return {
              uid: user.uid,
              displayName: user.displayName,
              email: secureEmail(user.email + ""),
              role: user.customClaims?.role,
              disabled: user.disabled,
            };
          });
      })
      .catch((error) => {
        functions.logger.error(error);
        return [];
      });
  });
interface CreateUserDataObject {
  displayName: string;
  email: string;
  role: string;
}
interface DeleteUserDataObject {
  uid: string;
}
interface ToggleUserStatusDataObject {
  uid: string;
  disabled: boolean;
}
interface ChangeUserRoleDataObject {
  uid: string;
  role: string;
}

exports.createUser = functions
  .region("europe-west3")
  .https.onCall(async (data: CreateUserDataObject, context) => {
    // verify Firebase Auth ID token
    if (!context.auth) {
      throw new HttpsError("unauthenticated", "Authentication Required!", {
        message: "Nice try :)",
      });
    }
    if (!(context.auth.token.role === "team")) {
      throw new HttpsError(
        "permission-denied",
        "Access denied. You're not an admin"
      );
    }
    if (!data.role) {
      throw new HttpsError("invalid-argument", "Missing argument 'role'");
    }

    try {
      const password = Math.random().toString(36).substr(2, 8);

      const userRecord = await auth.createUser({
        displayName: data.displayName,
        email: data.email,
        password: password,
        emailVerified: true,
      });

      const customClaims = getCustomClaims(data.role, userRecord.uid);

      const refreshTimeSnapshot = await admin
        .database()
        .ref("metadata/" + userRecord.uid + "/refreshTime")
        .once("value");

      if (!refreshTimeSnapshot) {
        throw new HttpsError(
          "internal",
          "Default role never set via onCreate() trigger."
        );
      }
      await axios.post(
        functions.config().hasura.endpoint,
        {
          query: `
            mutation UpdateUsername($id: String!, $name: String!, $type:String!) {
              insert_users_one(
                object: { id: $id, name: $name, type: $type }
                on_conflict: { constraint: users_pkey, update_columns: [last_seen, name, type] }
              ) {
                id
                last_seen 
                name
                type
              }
            }
          `,
          variables: {
            id: userRecord.uid,
            name: data.displayName,
            type: data.role,
          },
        },
        {
          headers: {
            "x-hasura-admin-secret": functions.config().hasura.admin_secret,
          },
        }
      );

      await auth.setCustomUserClaims(userRecord.uid, customClaims);

      // Update real-time database to notify client to force refresh.
      const metadataRef = admin.database().ref("metadata/" + userRecord.uid);
      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      await metadataRef.set({ refreshTime: new Date().getTime() });
      return {
        password,
      };
    } catch (error) {
      functions.logger.error(error);
      throw new HttpsError("already-exists", error);
    }
  });

exports.deleteUser = functions
  .region("europe-west3")
  .https.onCall(async (data: DeleteUserDataObject, context) => {
    // verify Firebase Auth ID token
    if (!context.auth) {
      throw new HttpsError("unauthenticated", "Authentication Required!", {
        message: "Nice try :)",
      });
    }
    if (!(context.auth.token.role === "team")) {
      throw new HttpsError(
        "permission-denied",
        "Access denied. You're not an admin"
      );
    }
    if (data.uid === context.auth?.uid) {
      throw new HttpsError("aborted", "You can't delete yourself!");
    }

    try {
      await auth.deleteUser(data.uid);

      return {
        message: "success",
      };
    } catch (error) {
      functions.logger.error(error);
      throw new HttpsError("unknown", error);
    }
  });

exports.toggleUserStatus = functions
  .region("europe-west3")
  .https.onCall(async (data: ToggleUserStatusDataObject, context) => {
    // verify Firebase Auth ID token
    if (!context.auth) {
      throw new HttpsError("unauthenticated", "Authentication Required!", {
        message: "Nice try :)",
      });
    }
    if (!(context.auth.token.role === "team")) {
      throw new HttpsError(
        "permission-denied",
        "Access denied. You're not an admin"
      );
    }
    if (data.uid === context.auth?.uid) {
      throw new HttpsError("aborted", "You can't toggle your own status");
    }

    try {
      await auth.updateUser(data.uid, {
        disabled: data.disabled,
      });
      return {
        message: "success",
      };
    } catch (error) {
      functions.logger.error(error);
      throw new HttpsError("unknown", error);
    }
  });

exports.changeUserRole = functions
  .region("europe-west3")
  .https.onCall(async (data: ChangeUserRoleDataObject, context) => {
    // verify Firebase Auth ID token
    if (!context.auth) {
      throw new HttpsError("unauthenticated", "Authentication Required!", {
        message: "Nice try :)",
      });
    }
    if (!(context.auth.token.role === "team")) {
      throw new HttpsError(
        "permission-denied",
        "Access denied. You're not an admin"
      );
    }
    if (data.uid === context.auth?.uid) {
      throw new HttpsError("aborted", "You can't change your own role");
    }

    try {
      const customClaims = getCustomClaims(data.role, data.uid);

      await auth.setCustomUserClaims(data.uid, customClaims);

      await axios.post(
        functions.config().hasura.endpoint,
        {
          query: `
          mutation UpdateUserRole($id: String!,$type:String!) {
            insert_users_one(
              object: { id: $id, type: $type }
              on_conflict: { constraint: users_pkey, update_columns: [type] }
            ) {
              id
              last_seen 
              name
              type
            }
          }
        `,
          variables: {
            id: data.uid,
            type: data.role,
          },
        },
        {
          headers: {
            "x-hasura-admin-secret": functions.config().hasura.admin_secret,
          },
        }
      );

      // Update real-time database to notify client to force refresh.
      const metadataRef = admin.database().ref("metadata/" + data.uid);
      // Set the refresh time to the current UTC timestamp.
      // This will be captured on the client to force a token refresh.
      await metadataRef.set({ refreshTime: new Date().getTime() });

      return {
        message: "success",
      };
    } catch (error) {
      functions.logger.error(error);
      throw new HttpsError("unknown", error);
    }
  });

exports.convertVideos = functions
  .region("europe-west3")
  .storage.bucket(functions.config().storage?.dev_bucket)
  .object()
  .onFinalize(async (object) => {
    const contentType = object.contentType; // File content type.

    if (contentType?.startsWith("video/")) {
      const path = require("path");
      const bucket = admin
        .storage()
        .bucket(functions.config().storage?.dev_bucket);
      const file = bucket.file(object.name || "");

      if (!file) {
        return functions.logger.error("No file found.");
      }

      const options = {
        action: "read" as any,
        expires: Date.now() + 1000 * 60 * 10,
      };
      const source = (await file.getSignedUrl(options))[0];

      // Config generated by coconut.co

      // Variables
      const api_key = functions.config().coconut.api_key;
      const access_key = functions.config().coconut.access_key;
      const secret_key = functions.config().coconut.secret_key;
      // const cdn = `s3://${access_key}:${secret_key}@${object.bucket}`;

      const webhook = functions.config().coconut.webhook;

      const fullpath = object.name;

      const filePath = path.dirname(fullpath); // File path in the bucket.

      if (fullpath?.includes("_converted")) {
        return functions.logger.info("Already converted");
      }

      const fileName = path.basename(fullpath); // Get the file name.

      // const metageneration = object.metageneration; // Number of times metadata has been generated. New objects have a value of 1.
      try {
        const { data } = await axios.post(
          "https://api.coconut.co/v2/jobs",
          {
            input: {
              url: source,
            },
            storage: {
              service: "gcs",
              region: "europe-west3",
              bucket: object.bucket,
              credentials: {
                access_key_id: access_key,
                secret_access_key: secret_key,
              },
            },
            notification: {
              type: "http",
              url: webhook,
            },
            outputs: {
              jpg: {
                path: `/${filePath}/${fileName}.jpg`,
              },
              "gif:320x": {
                key: "gif:preview",
                path: `/${filePath}/${fileName}_preview.gif`,
                scene: {
                  number: 3,
                  duration: 1,
                },
              },
              mp4: {
                path: `/${filePath}/${fileName}_converted.mp4`,
              },
              webm: {
                path: `/${filePath}/${fileName}_converted.webm`,
              },
            },
          },
          {
            auth: {
              username: api_key,
              password: "",
            },
          }
        );

        functions.logger.debug(JSON.stringify(data));

        const metadata = {
          metadata: {
            coconut_id: data.id,
          },
        };

        const updatedMetadata = await file.setMetadata(metadata);
        return functions.logger.log(updatedMetadata[0]);

        // coconut.createJob(
        //   {
        //     api_key,
        //     source,
        //     webhook,
        //     outputs: {
        //       jpg: `${cdn}/${filePath}/${fileName}_#num#.jpg, number=3`,
        //       mp4: `${cdn}/${filePath}/${fileName}_converted.mp4`,
        //       webm: `${cdn}/${filePath}/${fileName}_converted.webm`,
        //     },
        //   },
        //   (job: any) => {
        //     return functions.logger.log(`Job ${job.id} started at ${job.created_at}`);
        //   }
        // );
      } catch (error) {
        functions.logger.error(error.response.data);
        functions.logger.error(error.response.status);
        functions.logger.error(error.response.headers);
        functions.logger.error(JSON.stringify(error.response.data));
        return functions.logger.error(error);
      }
    }
    return;
  });

// HELPER FUNCTIONS

function secureEmail(email: string) {
  const a: string[] = email.split("@");
  const b: string = a[0] + "";
  let newstr = "";
  for (let i = 0; i < b.length; i++) {
    if (i > 2 && i < b.length - 1) newstr += "*";
    else newstr += b[i];
  }
  return newstr + "@" + a[1];
}

function getCustomClaims(role: string, uid: string) {
  return {
    role: role,
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": role,
      "x-hasura-allowed-roles": [role],
      "x-hasura-user-id": uid,
    },
  };
}
