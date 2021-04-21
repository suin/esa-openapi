import { schemaRef } from "../dsl";
import { member } from "./member";
import { paginatedObjects } from "./paginatedObjects";

export const paginatedMembers = paginatedObjects(
  "members",
  member.title,
  schemaRef(member)
);
