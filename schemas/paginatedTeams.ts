import { schemaRef } from "../dsl";
import { paginatedObjects } from "./paginatedObjects";
import { team } from "./team";

export const paginatedTeams = paginatedObjects(
  "teams",
  team.title,
  schemaRef(team)
);
