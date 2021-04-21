import { schemaRef } from "../dsl";
import { paginatedObjects } from "./paginatedObjects";
import { watcher } from "./watcher";

export const paginatedWatchers = paginatedObjects(
  "watchers",
  watcher.title,
  schemaRef(watcher)
);
