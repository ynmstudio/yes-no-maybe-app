# application.berlinartprize.com

## Technical Infrastructure

- Angular for Frontend
- Hasura as Database and GraphQL Layer
- Firebase
  - Firebase Authentication
  - Firebase Storage
  - Firebase Hosting
  - Firebase Remote Config (for App Settings etc)

## Usage

People should be able to setup new project by only providing Firebase Config file and links to live Hasura instance (cloud/self-hosted) and have a setup process inside the app for the first user.

Other authentication/storage/hosting providers could be added at a later stage.

--

Firebase config data will be extracted via REST-API before publishing the project. (see [Firebase Remote Config API](https://firebase.google.com/docs/reference/remote-config/rest) as an example)
