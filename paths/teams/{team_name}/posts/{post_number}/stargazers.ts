import { PathItemObject } from "openapi3-ts";
import { parameterRef, parametersRef, schemaRef } from "../../../../../dsl";
import { pagination } from "../../../../../parameters/pagination";
import { postNumber } from "../../../../../parameters/postNumber";
import { teamName } from "../../../../../parameters/teamName";
import { ok } from "../../../../../responses/ok";
import { paginatedStargazers } from "../../../../../schemas/paginatedStargazers";
import { tags } from "../../../../../tags";

const stargazers: PathItemObject = {
  get: {
    summary: "記事のStarを取得する",
    description: "指定された記事にStarをしたユーザ一覧を取得します。",
    operationId: "getPostStargazers",
    tags: [tags.star],
    parameters: [
      parameterRef(teamName),
      parameterRef(postNumber),
      ...parametersRef(pagination),
    ],
    responses: {
      "200": ok(schemaRef(paginatedStargazers)),
    },
  },
};

export default stargazers;
