import { schemaRef } from "../dsl";
import { paginatedObjects } from "./paginatedObjects";
import { tag } from "./tag";

export const paginatedTags = paginatedObjects(
  "tags",
  tag.title,
  schemaRef(tag)
);
