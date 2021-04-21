import { PathItemObject } from "openapi3-ts";
import { parameterRef, parametersRef, schemaRef } from "../../../../../dsl";
import { pagination } from "../../../../../parameters/pagination";
import { postNumber } from "../../../../../parameters/postNumber";
import { teamName } from "../../../../../parameters/teamName";
import { ok } from "../../../../../responses/ok";
import { paginatedWatchers } from "../../../../../schemas/paginatedWatchers";
import { tags } from "../../../../../tags";

const watchers: PathItemObject = {
  get: {
    summary: "Watchしたユーザー一覧を取得する",
    description: "指定された記事にWatchをしたユーザ一覧を取得します。",
    operationId: "getWatchers",
    tags: [tags.watch],
    parameters: [
      parameterRef(teamName),
      parameterRef(postNumber),
      ...parametersRef(pagination),
    ],
    responses: {
      "200": ok(schemaRef(paginatedWatchers)),
    },
  },
};

export default watchers;
