import { GraphQLError } from "graphql";

// import { ApolloError } from "apollo-server-express";

const formatGraphQLErrors = (error: GraphQLError) => {
  // @ts-ignore
  const errorDetail = error.originalError?.response?.body;

  try {
    if (errorDetail) return JSON.parse(errorDetail);
  } catch (error) {
    throw new Error("Internal server error");
  }

  if (error.message) return error.message;

  return null;
};

export default formatGraphQLErrors;
