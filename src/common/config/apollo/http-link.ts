import {HttpLink} from '@apollo/client/link/http';
import awsconfig from '../aws-exports';

export function createHttpLink() {
  const customHeaders = {
    'x-api-key': awsconfig.aws_appsync_apiKey,
  };

  return new HttpLink({
    uri: awsconfig.aws_appsync_graphqlEndpoint,
    headers: customHeaders,
  });
}
