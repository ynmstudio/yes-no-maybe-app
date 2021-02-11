export const environment = {
  production: false,
  hasura: {
    graphql: 'http://localhost:8080/v1/graphql',
    websocket: 'ws://localhost:8080/v1/graphql',
    secret_key: 'myadminsecretkey'
  },
  firebase: {
    apiKey: 'AIzaSyDDlFmixa4iLYYIEdja_MsWiyn-7qSe6mg',
    authDomain: 'berlin-art-prize.firebaseapp.com',
    databaseURL: 'https://berlin-art-prize-2d6fb.europe-west1.firebasedatabase.app/',
    projectId: 'berlin-art-prize',
    storageBucket: 'berlin-art-prize.appspot.com',
    messagingSenderId: '635172283651',
    appId: '1:635172283651:web:b12337bad108751a017536',
    measurementId: 'G-23W7H5Q133',
  },
};
