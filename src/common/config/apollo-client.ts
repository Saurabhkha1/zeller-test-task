import {InMemoryCache, ApolloLink, ApolloClient} from '@apollo/client';
import {createHttpLink} from './apollo/http-link';
import {errorLink} from './apollo/error-link';

const httpLink = createHttpLink();

export const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  connectToDevTools: process.env.NODE_ENV !== 'production',
  cache: new InMemoryCache(),
  assumeImmutableResults: true,
});
