import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloLink, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { onError } from 'apollo-link-error';
import introspectionResult from 'generated/types.graphql-gen';
import { getMainDefinition } from '@apollo/client/utilities';
import { OperationDefinitionNode } from 'graphql';
import { ConnectionService } from 'ng-connection-service';
import { RetryLink } from 'apollo-link-retry';
import QueueLink from 'apollo-link-queue';
import { CachePersistor } from 'apollo3-cache-persist';

import { environment } from '../environments/environment';

// This should be in sync with update information inside ngsw-config.json file
export const SCHEMA_VERSION = '0.0.5'; // Must be a string.
export const SCHEMA_VERSION_KEY = 'apollo-schema-version';

const uri = environment.hasura.graphql; // <-- add the URL of the GraphQL server here
const websocket = environment.hasura.websocket; // <-- add the URL of the GraphQL server here

export function createApollo(
  httpLink: HttpLink,
  connectionService: ConnectionService
) {
  // Read the current schema version from AsyncStorage.
  const currentVersion = localStorage.getItem(SCHEMA_VERSION_KEY);

  // Get the authentication token from local storage if it exists
  const asyncAuth = setContext(async (_, { headers }) => {
    // Grab token if there is one in storage or hasn't expired
    let token;

    try {
      token = localStorage.getItem('token');
    } catch (error) {
      console.error(error);
      return {};
    }

    if (token) {
      // Return the headers as usual
      return {
        headers: {
          ...headers,
          Authorization: token ? `Bearer ${token}` : '',
        },
      };
    } else {
      return {
        headers: {
          ...headers,
        },
      };
    }
  });

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
      timeout: 30000,
      connectionParams: async ({ headers }: any) => {
        const token = localStorage.getItem('token');
        return {
          headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : '',
          },
        };
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
    asyncAuth,
    retryLink,
    offlineLink as any,
    onError(({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path, extensions }) => {
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Code: ${extensions?.code}`
          );
          switch (extensions?.code) {
            case 'invalid-jwt':
              // const oldHeaders = operation.getContext().headers;
              // operation.setContext({
              //   headers: {
              //     ...oldHeaders,
              //     authorization: getNewToken(),
              //   },
              // });
              // // retry the request, returning the new observable
              // return forward(operation);
              break;
            default:
              break;
          }
        });
      if (networkError) {
        console.log(`[Network error]: ${networkError}`);
        console.error(networkError);
        // alert("New network error. Check console");
      }
    }),
    split(
      // split based on operation type
      ({ query }: any) => {
        const { kind, operation } = getMainDefinition(
          query
        ) as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      ws as any,
      http
    ),
  ]);

  const cache = new InMemoryCache({
    possibleTypes: introspectionResult.possibleTypes,
    typePolicies: {
      Query: {
        fields: {
          messages: {
            // Short for always preferring incoming over existing data.
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
      deps: [HttpLink, ConnectionService],
    },
  ],
})
export class GraphQLModule {}
