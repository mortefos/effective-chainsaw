import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from "apollo-server-express";

import { posts } from "./posts";

const books = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

export const typeDefs = mergeTypeDefs([posts, books]);
