export const environment = {
  version: '0.0.3',
  production: false,
  useEmulators: true,
  hasura: {
    graphql: 'http://localhost:8080/v1/graphql',
    websocket: 'ws://localhost:8080/v1/graphql',
    secret_key: 'myadminsecretkey'
  },
  firebase: {
    apiKey: 'AIzaSyA-oadaj-xgkzWiLlX0dZ7AKmWQQf3Nk3M',
    authDomain: 'paper-unlimited.firebaseapp.com',
    databaseURL: 'https://paper-unlimited-default-rtdb.europe-west1.firebasedatabase.app/',
    projectId: 'paper-unlimited',
    storageBucket: 'gs://paper-unlimited',
    messagingSenderId: '507545041472',
    appId: '1:507545041472:web:c03f0e1c0c83565e44bda5',
    measurementId: '',
  },
};
