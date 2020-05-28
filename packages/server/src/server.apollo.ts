import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./typeDefs";

const resolvers = {
  Query: {
    books: () => null,
  },
};

export const apollo = new ApolloServer({ typeDefs, resolvers });
