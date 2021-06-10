<img src="./docs/assets/header.svg" title="YesNoMaybe App Logo" height="auto" width="100%">

# About the YesNoMaybe App

In collaboration with communication design and web development studio [Yil & Mann](https://ynm.studio), the [Berlin Art Prize e.V.](https://www.berlinartprize.com) has developed an online-based tool for anonymized selection processes. Complex artist portfolios are submitted and anonymized via the software. For the jury process, a linked CMS allows the portfolios to be viewed, indexed, and classified via interactive evaluation functions. The application is kept simple and streamlined for all users. Overall, the YesNoMaybe app is intended to prevent discrimination in selection processes and focus attention on the content of the applications.

[read more](https://github.com/ynmstudio/yes-no-maybe-app/wiki/About)

## Important Notice

**The application is in alpha state**
While we tried to minimize the chance to introduce vulnerabilities (authentication/file-system), this application and its codebase haven't been audited by security specialists and it shouldn't be used to store, share or publish sensitive information.

## Usage

Developers should be able to setup a new project by providing Firebase Config file and update the links to a Hasura instance (cloud/self-hosted). Please check the section **Getting Started** for more details regarding the configuration of Firebase and Hasura. The Section **Deploy** contains information on how to built the frontend.

Other authentication/storage/hosting providers may be added at a later stage.

## Prerequisites

1. install [Angular CLI](https://cli.angular.io)
2. install [Hasura CLI](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#install-hasura-cli)
3. install [Docker](https://docs.docker.com/get-docker/)
4. install [Firebase CLI](https://github.com/firebase/firebase-tools)

## Features

- Built upon the Hasura GraphQL engine
- Frontend built with Angular + Tailwind CSS
- Multi-language support (supported languages: EN/DE)
- Authentication (e-mail/password with Firebase Authentication)
- File Storage (supported with Firebase Storage)
- Automatic image resizing (built with Firebase Functions)
- Automatic video converter (built with Firebase Functions and Coconut.co)

## Technical Infrastructure

- **Angular** for Frontend
- **Hasura** as Database and GraphQL Layer
- **Firebase**
  - Firebase Authentication
  - Firebase Storage
  - Firebase Hosting
  - Firebase Functions
  - Firebase Remote Config (for App Settings etc)
- **Coconut.co** for automatic video conversion

## Getting Started

### Angular

1. `cd frontend`
2. duplicate `.env.example` and rename to `.env` and adapt accordingly. Please adapt firebase env accordingly (see firebase section)
3. `npm i`
4. `npm start`

### Hasura

#### Hasura Setup

1. duplicate `.env.example` and rename to `.env` and adapt accordingly. please adapt firebase env accordingly (see firebase section)
2. `docker-compose up -d`
3. `cd database`
4. `hasura migrate apply --admin-secret myadminsecretkey --envfile .env`
5. `hasura metadata apply --admin-secret myadminsecretkey --envfile .env`
6. `hasura console --admin-secret myadminsecretkey`

#### Local Development

_Important: always run via `hasura console --admin-secret myadminsecretkey` inside folder `database` to keep track of changes!_

#### IMPORTANT! REQUIRED JSON API MIGRATIONS

Currently, session variables are not available in computed fields by default and/or can be added via the console but must be added via the Hasura Endinge API. For more details see their article: [Accessing Hasura Session Variables in Computed Fields](https://hasura.io/docs/1.0/graphql/core/schema/computed-fields.html#accessing-hasura-session-variables-in-computed-fields).

**`rated_by_user` field**

The field `rated_by_user` has to be added via the Hasura API on each machine hasura will run on.

- POST to `http://localhost:8080/v1/query`

**Request**

```bash
POST /v1/query HTTP/1.1
Content-Type: application/json
X-Hasura-Role: admin
X-Hasura-Admin-Secret: <your-admin-secret>
```

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

**Expected Response**

```json
{
  "message": "success"
}
```

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

## Deploy

### Database

The Hasura database and GraphQL engine can be deployed either via Hasura's own [Cloud Service](https://cloud.hasura.io/), which offers a fairly generous free tier. Otherwise you can deploy Hasura on your own server. Please see their documentation for all deployment guides: https://hasura.io/docs/latest/graphql/core/deployment/deployment-guides/index.html

### App

The app can be deployed using **Firebase Hosting**, but any other static file server should work as well (for example Netlify, GitHub Pages or your own server).
For deploying the application, the build script needs to run inside the frontend folder `npm run build:prod`.

Firebase Hosting example: `cd frontend && npm run build:prod && cd .. && firebase deploy --only hosting`

# Upcoming Features

- [ ] Add function to let the team add notes to applications the jury should see when evaluating an application, e.g. where to pause a video.
- [ ] Add internal tagging system.

# Funding

Funded by [Senatsverwaltung für Kultur und Europa Berlin](https://www.berlin.de/sen/kultur/)
