import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink, InMemoryCache, split } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import QueueLink from 'apollo-link-queue';
import { CachePersistor } from 'apollo3-cache-persist';
import introspectionResult from 'generated/types.graphql-gen';
import { OperationDefinitionNode } from 'graphql';
import { ConnectionService } from 'ng-connection-service';

import { environment } from '../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { take } from 'rxjs/operators';
import { AppService } from './shared/services/app.service';
import { AlertService } from './shared/components/alert/alert.service';
import { getParseErrors } from '@angular/compiler';

// This should be in sync with update information inside ngsw-config.json file
export const SCHEMA_VERSION = '0.0.1'; // Must be a string.
export const SCHEMA_VERSION_KEY = 'apollo_schema_version';

const uri = environment.hasura.graphql; // <-- add the URL of the GraphQL server here
const websocket = environment.hasura.websocket; // <-- add the URL of the GraphQL server here

const localHeaders = (
  role: string = 'team',
  id: string = 'yFVIqlR8dNKzhgubUYy9uYwb3fVR'
) => {
  return {
    'x-hasura-admin-secret': environment.hasura.secret_key,
    'x-hasura-role': role, // adapt accordingly to test different users
    'x-hasura-user-id': id,
    'x-hasura-default-role': role,
  };
};

const authCtx = (auth: AngularFireAuth) =>
  setContext(async (_, { headers }) => {
    // Grab token if there is one in storage or hasn't expired
    const token = await auth.idToken.pipe(take(1)).toPromise();

    if (token) {
      let devHeaders = {};
      if (!environment.production) {
        const tokenResult = await auth.idTokenResult.pipe(take(1)).toPromise();
        devHeaders = localHeaders(
          tokenResult?.claims['role'],
          tokenResult?.claims['user_id']
        );
      }
      // Return the headers as usual

      return {
        headers: {
          ...headers,
          ...devHeaders,
          Authorization: token ? `Bearer ${token}` : '',
        },
      };
    } else {
      return {
        headers: {
          ...headers,
          ...(environment.production ? {} : localHeaders()),
        },
      };
    }
  });

export function createApollo(
  httpLink: HttpLink,
  auth: AngularFireAuth,
  connectionService: ConnectionService,
  alertService: AlertService
) {
  // Read the current schema version from AsyncStorage.
  const currentVersion = localStorage.getItem(SCHEMA_VERSION_KEY);

  // Create an http link:
  const http = httpLink.create({
    uri: environment.hasura.graphql,
  });

  // Create a WebSocket link:
  const ws = new WebSocketLink({
    uri: websocket,
    options: {
      reconnect: true,
      lazy: true,
      connectionParams: async () => {
        const token = await auth.idToken.pipe(take(1)).toPromise();
        if (token) {
          let devHeaders = {};
          if (!environment.production) {
            const tokenResult = await auth.idTokenResult
              .pipe(take(1))
              .toPromise();
            devHeaders = localHeaders(
              tokenResult?.claims['role'],
              tokenResult?.claims['user_id']
            );
          }
          // Return the headers as usual
          return {
            headers: {
              ...devHeaders,
              Authorization: token ? `Bearer ${token}` : '',
            },
          };
        } else {
          return {
            headers: {
              ...(environment.production ? {} : localHeaders()),
            },
          };
        }
      },
    },
  });

  const retryLink = new RetryLink({});

  const offlineLink = new QueueLink();
  connectionService
    .monitor()
    .subscribe((online) => (online ? offlineLink.open() : offlineLink.close()));

  // const link = ApolloLink.from([auth, http]);
  // using the ability to split links, you can send data to each link
  // depending on what kind of operation is being sent
  const link = ApolloLink.from([
    authCtx(auth),
    retryLink,
    offlineLink as any,
    onError(({ graphQLErrors, networkError, response, operation, forward }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
          let oldHeaders: any;
          alertService.error(message);
          switch (extensions?.code) {
            case 'invalid-jwt':
              alertService.error('JWT is inavlid');

              break;
            case 'jwt-invalid-claims':
              alertService.error('JWT has invalid claims');
              oldHeaders = operation.getContext().headers;
              operation.setContext(async () => {
                // Grab token if there is one in storage or hasn't expired
                const token = await auth.idToken.pipe(take(1)).toPromise();
                if (token) {
                  let devHeaders = {};
                  if (!environment.production) {
                    const tokenResult = await auth.idTokenResult
                      .pipe(take(1))
                      .toPromise();
                    devHeaders = localHeaders(
                      tokenResult?.claims['role'],
                      tokenResult?.claims['user_id']
                    );
                  }
                  // Return the headers as usual
                  return {
                    headers: {
                      ...oldHeaders,
                      ...devHeaders,
                      Authorization: token ? `Bearer ${token}` : '',
                    },
                  };
                } else {
                  return {
                    headers: {
                      ...oldHeaders,
                      ...(environment.production ? {} : localHeaders()),
                    },
                  };
                }
              });
              // retry the request, returning the new observable
              break;
            case 'not-found':
              alertService.error('Headers not found');
              oldHeaders = operation.getContext().headers;
              operation.setContext(async () => {
                // Grab token if there is one in storage or hasn't expired
                const token = await auth.idToken.pipe(take(1)).toPromise();
                if (token) {
                  let devHeaders = {};
                  if (!environment.production) {
                    const tokenResult = await auth.idTokenResult
                      .pipe(take(1))
                      .toPromise();
                    devHeaders = localHeaders(
                      tokenResult?.claims['role'],
                      tokenResult?.claims['user_id']
                    );
                  }
                  // Return the headers as usual
                  return {
                    headers: {
                      ...oldHeaders,
                      ...devHeaders,
                      Authorization: token ? `Bearer ${token}` : '',
                    },
                  };
                } else {
                  return {
                    headers: {
                      ...oldHeaders,
                      ...(environment.production ? {} : localHeaders()),
                    },
                  };
                }
              });
              // retry the request, returning the new observable
              break;

            default:
              break;
          }
        });
      if (networkError) {
        console.debug(`[Network error]: ${networkError.message}`);
        alertService.warn(networkError.message);
      }
      return forward(operation);
    }),
    split(
      // split based on operation type
      ({ query }: any) => {
        const { kind, operation } = getMainDefinition(
          query
        ) as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      ws,
      http
    ),
  ]);

  const cache = new InMemoryCache({
    possibleTypes: introspectionResult.possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          editions: {
            merge: false,
          },
        },
      },
    },
  });

  // await before instantiating ApolloClient, else queries might run before the cache is persisted
  const persistor = new CachePersistor({
    cache,
    storage: localStorage,
    debug: environment.production ? false : true,
  });

  if (currentVersion === SCHEMA_VERSION) {
    // If the current version matches the latest version,
    // we're good to go and can restore the cache.
    persistor.restore();
  } else {
    // Otherwise, we'll want to purge the outdated persisted cache
    // and mark ourselves as having updated to the latest version.
    persistor
      .purge()
      .then(() => localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION));
  }

  return {
    link: link,
    cache,
    persistor,
    ssrMode: false,
    fetchPolicy: 'cache-and-network',
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, AngularFireAuth, ConnectionService, AlertService],
    },
  ],
})
export class GraphQLModule {}
