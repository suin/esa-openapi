import { schemaRef } from "../dsl";
import { paginatedObjects } from "./paginatedObjects";
import { stargazer } from "./stargazer";

export const paginatedStargazers = paginatedObjects(
  "stargazers",
  stargazer.title,
  schemaRef(stargazer)
);
