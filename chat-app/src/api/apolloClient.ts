import { ApolloClient, InMemoryCache } from "@apollo/client";

// let url = process.env.API_GATEWAY_URI
// let url = 'http://192.168.0.8:7001'
// let url = 'http://127.0.0.1:7001'
let url = "http://localhost:7001";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  uri: `${url}/graphql`,
});

export default apolloClient;
