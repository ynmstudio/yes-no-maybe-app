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

## Features

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
5. Set admin secret key for synchronization from Firebase back to Hasura with `firebase functions:config:set hasura.endpoint="http://localhost:8080/v1/graphql"`
6. Set admin secret key for synchronization from Firebase back to Hasura with `firebase functions:config:set hasura.admin_secret="myadminsecretkey"`
7. Set shared secret key so hasura is able to interact with firebase storage with `firebase functions:config:set hasura.shared_secret="somesecuresecretkey"`

#### Local Development

1. `cd functions`
2. `npm install`
3. `firebase init emulators`
4. `firebase functions:config:get > .runtimeconfig.json`
5. `npm start`

#### Automated Video Converter

_Limitation: Currently only S3 Buckets are supported_

Videos are automatically converted via Coconut.co
For support the following environment variables must be set for firebase:

1. `firebase functions:config:set coconut.api_key="k-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"`
2. `firebase functions:config:set coconut.access_key="XXXXXXXXXXXXXXXXXXXXXXXX"`
3. `firebase functions:config:set coconut.secret_key="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"`
4. `firebase functions:config:set coconut.webhook="https://app.coconut.co/tools/webhooks/<coconut-webhook-id>/<user-name>"`;

Check https://docs.coconut.co/ for more information.

### REQUIRED JSON API MIGRATIONS

#### FOR "rated_by_user" FIELD

`http://localhost:8080/v1/query`

```json
{
  "type": "add_computed_field",
  "args": {
    "table": {
      "name": "applications",
      "schema": "public"
    },
    "name": "rated_by_user",
    "definition": {
      "function": {
        "name": "application_rated_by_user",
        "schema": "public"
      },
      "table_argument": "application_row",
      "session_argument": "hasura_session"
    }
  }
}
```

see https://hasura.io/docs/1.0/graphql/core/schema/computed-fields.html#accessing-hasura-session-variables-in-computed-fields

# Upcoming Features

- [ ] Let team add hints to applications where to stop a video or other important remarks the jury should see when evaluating a application
- [ ] Add internal tagging system.
