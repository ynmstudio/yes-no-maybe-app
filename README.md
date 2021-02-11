# application.berlinartprize.com

## Usage

People should be able to setup new project by only providing Firebase Config file and links to live Hasura instance (cloud/self-hosted) and have a setup process inside the app for the first user.

Other authentication/storage/hosting providers could be added at a later stage.

## Installation

### Angular

- `cd frontend && npm i`
- `npm start`

### Hasura

- create `.env` file
- `docker-compose down && docker-compose up -d`
- `cd database`
- `hasura migrate apply --admin-secret myadminsecretkey --envfile .env`
- `hasura metadata apply --admin-secret myadminsecretkey --envfile .env`

## Technical Infrastructure

- **Angular** for Frontend
- **Hasura** as Database and GraphQL Layer
- **Firebase**
  - Firebase Authentication
  - Firebase Storage
  - Firebase Hosting
  - Firebase Remote Config (for App Settings etc)

### Angular

#### Local Development

1. `cd frontend`
2. `npm install`
3. `npm start`

### Hasura

Important: always run via `hasura console --admin-secret myadminsecretkey` inside folder `database` to keep track of changes!

#### Local Development

1. duplicate `.env.example` and rename to `.env` and adapt accordingly. please adapt firebase env accordingly (see firebase section)
2. `docker-compose up -d`
3. `cd database`
4. `hasura console --admin-secret myadminsecretkey`

#### Migration

- `hasura metadata export --admin-secret myadminsecretkey`

<!-- - `hasura migrate create <MIGRATION_NAME> --admin-secret myadminsecretkey` -->

- `hasura migrate squash --name "<feature-name>" --from <start-migration-version> --admin-secret myadminsecretkey`
- `hasura migrate apply --version "<squash-migration-version>" --admin-secret myadminsecretkey --skip-execution`
- `hasura migrate apply <squash-migration-version> --admin-secret <admin-secret> --endpoint <external-hasura-endpoint>`
- `hasura metadata apply --admin-secret <admin-secret> --endpoint <external-hasura-endpoint>`

### Firebase

Firebase config data will be extracted via REST-API before publishing the project. (see [Firebase Remote Config API](https://firebase.google.com/docs/reference/remote-config/rest) as an example)

#### Firebase Setup

1. `cd functions`
2. `firebase login` and select your project
3. Set the admin account which gets the team role assigned on sign-up with `firebase functions:config:set hasura.admin_email="webmaster@example.com"`
4. (optional) Set automatic team member accounts by defining your email domain with `firebase functions:config:set hasura.team_role_email_domain="@example.com"`
5. Set shared secret key so hasura is able to interact with firebase storage with `firebase functions:config:set hasura.shared_secret="somesecuresecretkey"`

#### Local Development

1. `cd functions`
2. `npm install`
3. `firebase init emulators`
4. `firebase functions:config:get > .runtimeconfig.json`
5. `npm start`
