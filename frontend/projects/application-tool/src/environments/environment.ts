export const environment = {
  production: false,
  hasura: {
    graphql: 'http://localhost:8080/v1/graphql',
    websocket: 'ws://localhost:8080/v1/graphql',
  },
  firebase: {
    apiKey: 'AIzaSyDDlFmixa4iLYYIEdja_MsWiyn-7qSe6mg',
    authDomain: 'berlin-art-prize.firebaseapp.com',
    databaseURL: 'https://berlin-art-prize.firebaseio.com',
    projectId: 'berlin-art-prize',
    storageBucket: 'berlin-art-prize.appspot.com',
    messagingSenderId: '635172283651',
    appId: '1:635172283651:web:b12337bad108751a017536',
    measurementId: 'G-23W7H5Q133',
  },
};
