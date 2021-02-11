import { Injectable } from '@angular/core';
import { ApolloCache } from '@apollo/client/core';
import { ApplicationFragmentDoc } from 'generated/types.graphql-gen';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  updateApplicationFragment(
    store: ApolloCache<any>,
    application_id: string,
    updated_at: string
  ) {
    // Read the data from our cache for this query.
    let { ...data }: any = store.readFragment({
      id: `applications:${application_id}`,
      fragment: ApplicationFragmentDoc,
      fragmentName: 'Application',
      optimistic: true,
    });
    // Add our message from the mutation to the end.
    data = { ...data, updated_at };
    // Write our data back to the cache.
    store.writeFragment({
      id: `applications:${application_id}`,
      fragment: ApplicationFragmentDoc,
      fragmentName: 'Application',
      data,
    });
  }
}
