import { schemaRef } from "../dsl";
import { comment } from "./comment";
import { paginatedObjects } from "./paginatedObjects";

export const paginatedComments = paginatedObjects(
  "comments",
  comment.title,
  schemaRef(comment)
);
