import { schemaRef } from "../dsl";
import { paginatedObjects } from "./paginatedObjects";
import { post } from "./post";

export const paginatedPosts = paginatedObjects(
  "posts",
  post.title,
  schemaRef(post)
);
