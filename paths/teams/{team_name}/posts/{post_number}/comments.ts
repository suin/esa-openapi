import { PathItemObject } from "openapi3-ts";
import { parameterRef, parametersRef, schemaRef } from "../../../../../dsl";
import { pagination } from "../../../../../parameters/pagination";
import { postNumber } from "../../../../../parameters/postNumber";
import { teamName } from "../../../../../parameters/teamName";
import { ok } from "../../../../../responses/ok";
import { comment } from "../../../../../schemas/comment";
import { newComment } from "../../../../../schemas/newComment";
import { paginatedComments } from "../../../../../schemas/paginatedComments";
import { tags } from "../../../../../tags";

const comments: PathItemObject = {
  get: {
    summary: "記事のコメント一覧を取得する",
    description: "記事のコメント一覧を更新日の降順で返却します。",
    operationId: "getPostComments",
    tags: [tags.comment],
    parameters: [
      parameterRef(teamName),
      parameterRef(postNumber),
      ...parametersRef(pagination),
    ],
    responses: {
      "200": ok(schemaRef(paginatedComments)),
    },
  },
  post: {
    summary: "コメントを投稿する",
    description: "記事に新しいコメントを作成します。",
    operationId: "createComment",
    tags: [tags.comment],
    parameters: [
      parameterRef(teamName),
      parameterRef(postNumber),
      ...parametersRef(pagination),
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: schemaRef(newComment),
        },
      },
      required: true,
    },
    responses: {
      "200": ok(schemaRef(comment)),
    },
  },
};

export default comments;
