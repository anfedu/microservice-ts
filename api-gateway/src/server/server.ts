import config from "config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import cookieParser from "cookie-parser";

import schema from "#root/graphql/schema";
import resolvers from "#root/graphql/resolvers";
import formatGraphQLErrors from "./formatGraphQLErrors";
import injectSession from "./middleware/injectSession";

const PORT = <number>config.get("PORT");

const server = async () => {
  const apolloServer = new ApolloServer({
    context: (a) => a,
    formatError: formatGraphQLErrors,
    resolvers,
    typeDefs: schema,
  });

  const app = express();
  app.use(cookieParser());

  app.use(
    cors({
      credentials: true,
      origin: (origin, cb) => cb(null, true),
    })
  );

  await apolloServer.start();
  app.use(injectSession);

  apolloServer.applyMiddleware({
    app,
    cors: { credentials: true, origin: "http://localhost:7003" }, // origin is url for client
    path: "/graphql", // path for server
  });

  app.listen(PORT, "0.0.0.0", () =>
    console.log(`API gateway listening on port ${PORT}`)
  );
};

export default server;
