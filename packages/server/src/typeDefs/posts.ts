import { gql } from "apollo-server-express";

export const posts = gql`
  type Post {
    title: String
    author: String
  }

  type Query {
    posts: [Post]
  }
`;
