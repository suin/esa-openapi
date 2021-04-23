import { PathItemObject } from "openapi3-ts";
import { parameterRef, schemaRef } from "../../../../dsl";
import { commentId } from "../../../../parameters/commentId";
import { teamName } from "../../../../parameters/teamName";
import { noContent } from "../../../../responses/noContent";
import { ok } from "../../../../responses/ok";
import { comment as commentSchema } from "../../../../schemas/comment";
import { updateCommentBody } from "../../../../schemas/updateCommentBody";
import { scope } from "../../../../security";
import { tags } from "../../../../tags";

const comment: PathItemObject = {
  get: {
    summary: "コメントを取得する",
    description: "指定されたコメントを取得します。",
    operationId: "getComment",
    tags: [tags.comment],
    parameters: [
      parameterRef(teamName),
      parameterRef(commentId),
      {
        name: "include",
        in: "query",
        description:
          "`stargazers`を指定するとStarの配列を含んだレスポンスを返します。",
        schema: {
          type: "string",
          enum: ["stargazers"],
        },
      },
    ],
    responses: {
      "200": ok(schemaRef(commentSchema)),
    },
  },
  patch: {
    summary: "コメントを更新する",
    description: "指定されたコメントを更新します。",
    operationId: "updateComment",
    tags: [tags.comment],
    security: scope.write,
    parameters: [parameterRef(teamName), parameterRef(commentId)],
    requestBody: {
      content: {
        "application/json": {
          schema: schemaRef(updateCommentBody),
        },
      },
      required: true,
    },
    responses: {
      "200": ok(schemaRef(commentSchema)),
    },
  },
  delete: {
    summary: "コメントを削除する",
    description: "指定されたコメントを削除します。",
    operationId: "deleteComment",
    tags: [tags.comment],
    security: scope.write,
    parameters: [parameterRef(teamName), parameterRef(commentId)],
    responses: {
      "204": noContent,
    },
  },
};

export default comment;
