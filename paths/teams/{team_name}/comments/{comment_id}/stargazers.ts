import { PathItemObject } from "openapi3-ts";
import { parameterRef, parametersRef, schemaRef } from "../../../../../dsl";
import { commentId } from "../../../../../parameters/commentId";
import { pagination } from "../../../../../parameters/pagination";
import { teamName } from "../../../../../parameters/teamName";
import { ok } from "../../../../../responses/ok";
import { paginatedStargazers } from "../../../../../schemas/paginatedStargazers";
import { tags } from "../../../../../tags";

const stargazers: PathItemObject = {
  get: {
    summary: "コメントのStarを取得する",
    description: "指定されたコメントにStarをしたユーザ一覧を取得します。",
    operationId: "getCommentStargazers",
    tags: [tags.star],
    parameters: [
      parameterRef(teamName),
      parameterRef(commentId),
      ...parametersRef(pagination),
    ],
    responses: {
      "200": ok(schemaRef(paginatedStargazers)),
    },
  },
};

export default stargazers;
