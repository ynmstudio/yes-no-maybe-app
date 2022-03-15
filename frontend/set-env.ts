const fs = require('fs');
const writeFile = fs.writeFile;

// Configure Angular `environment.ts` file path
const targetPath =
  './projects/application-tool/src/environments/environment.ts';
// Load node modules
const colors = require('colors');
require('dotenv').config();
const envConfigFile = `export const environment = {
  version: '${process.env.npm_package_version}',
  production: ${process.env.PRODUCTION},
  hasura: {
    graphql: '${process.env.HASURA_GRAPHQL_URL}',
    websocket: '${process.env.HASURA_WEBSOCKET_URL}',
    secret_key: '${process.env.HASURA_LOCAL_DEV_SECRET_KEY}'
  },
  firebase: {
    apiKey: '${process.env.FIREBASE_API_KEY}',
    authDomain: '${process.env.FIREBASE_AUTH_DOMAIN}',
    databaseURL: '${process.env.FIREBASE_DATABASE_URL}',
    projectId: '${process.env.FIREBASE_PROJECT_ID}',
    storageBucket: '${process.env.FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${process.env.FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${process.env.FIREBASE_APP_ID}',
    measurementId: '${process.env.FIREBASE_MEASUREMENT_ID}',
  },
};
`;
console.log(
  colors.magenta(
    'The file `environment.ts` will be written with the following content: \n'
  )
);
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, (err: any) => {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      colors.magenta(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      )
    );
  }
});
