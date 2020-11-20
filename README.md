# application.berlinartprize.com

## Usage

People should be able to setup new project by only providing Firebase Config file and links to live Hasura instance (cloud/self-hosted) and have a setup process inside the app for the first user.

Other authentication/storage/hosting providers could be added at a later stage.

## Installation

### Angular

- `cd frontend && npm i`

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

### Hasura

Important: always run via `hasura console --admin-secret myadminsecretkey` to keep track of changes!

#### Migration

- `hasura metadata export --admin-secret myadminsecretkey`

<!-- - `hasura migrate create <MIGRATION_NAME> --admin-secret myadminsecretkey` -->

- `hasura migrate squash --name "<feature-name>" --from <start-migration-version> --admin-secret myadminsecretkey`
- `hasura migrate apply --version "<squash-migration-version>" --admin-secret myadminsecretkey --skip-execution`
- `hasura migrate apply <squash-migration-version> --admin-secret <admin-secret> --endpoint <external-hasura-endpoint>`
- `hasura metadata apply --admin-secret <admin-secret> --endpoint <external-hasura-endpoint>`

### Firebase

Firebase config data will be extracted via REST-API before publishing the project. (see [Firebase Remote Config API](https://firebase.google.com/docs/reference/remote-config/rest) as an example)
