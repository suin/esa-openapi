import { PathItemObject } from "openapi3-ts";
import { parameterRef, parametersRef, schemaRef } from "../../../dsl";
import { pagination } from "../../../parameters/pagination";
import { teamName } from "../../../parameters/teamName";
import { ok } from "../../../responses/ok";
import { paginatedComments } from "../../../schemas/paginatedComments";
import { tags } from "../../../tags";

const comments: PathItemObject = {
  get: {
    summary: "コメント一覧を取得する",
    description: "チーム全体のコメント一覧を作成日の降順で返却します。",
    operationId: "getComments",
    tags: [tags.comment],
    parameters: [parameterRef(teamName), ...parametersRef(pagination)],
    responses: {
      "200": ok(schemaRef(paginatedComments)),
    },
  },
};

export default comments;
