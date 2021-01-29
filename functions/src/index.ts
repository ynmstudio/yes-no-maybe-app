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
