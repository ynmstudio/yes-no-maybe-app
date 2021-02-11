import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

// exports.processEmailVerified = functions.region("europe-west3").auth.user().

// On sign up.
exports.processSignUp = functions
  .region("europe-west3") // check https://firebase.google.com/docs/functions/locations to set region as needed
  .auth.user()
  .onCreate((user) => {
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

    const customClaims = {
      role: role,
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": role,
        "x-hasura-allowed-roles": [role],
        "x-hasura-user-id": user.uid,
      },
    };

    return admin
      .auth()
      .setCustomUserClaims(user.uid, customClaims)
      .then(() => {
        // Update real-time database to notify client to force refresh.
        const metadataRef = admin.database().ref("metadata/" + user.uid);
        // Set the refresh time to the current UTC timestamp.
        // This will be captured on the client to force a token refresh.
        return metadataRef.set({ refreshTime: new Date().getTime() });
      })
      .catch((error) => {
        console.log(error);
      });
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
        console.log(`file deleted with key: ${key}`);
        res
          .status(200)
          .send(
            `Successfully deleted file '${req.body.event.data.old.originalname}'.`
          );
        return;
      })
      .catch((err) => {
        console.log(`Failed to remove file, error: ${err}`);
        res.status(404).send(`Failed to remove file, error: ${err}`);
        return;
      });
  });
