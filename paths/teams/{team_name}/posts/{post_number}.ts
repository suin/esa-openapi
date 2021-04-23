import { PathItemObject } from "openapi3-ts";
import { parameterRef, schemaRef } from "../../../../dsl";
import { includeCommentsAndStargazers } from "../../../../parameters/includeCommentsAndStargazers";
import { postNumber } from "../../../../parameters/postNumber";
import { teamName } from "../../../../parameters/teamName";
import { noContent } from "../../../../responses/noContent";
import { ok } from "../../../../responses/ok";
import { updatePostBody } from "../../../../schemas/updatePostBody";
import { post as postSchema } from "../../../../schemas/post";
import { scope } from "../../../../security";
import { tags } from "../../../../tags";

const post: PathItemObject = {
  get: {
    summary: "記事を取得する",
    description: "指定された記事を取得します。",
    operationId: "getPost",
    tags: [tags.post],
    parameters: [
      parameterRef(teamName),
      parameterRef(postNumber),
      parameterRef(includeCommentsAndStargazers),
    ],
    responses: {
      "200": ok(schemaRef(postSchema)),
    },
  },
  patch: {
    summary: "記事を編集する",
    description: "指定された記事を編集します。",
    operationId: "updatePost",
    tags: [tags.post],
    security: scope.write,
    parameters: [parameterRef(teamName), parameterRef(postNumber)],
    requestBody: {
      content: {
        "application/json": {
          schema: schemaRef(updatePostBody),
        },
      },
      required: true,
    },
    responses: {
      "200": ok(schemaRef(postSchema)),
    },
  },
  delete: {
    summary: "記事を削除する",
    description: "指定された記事を削除します。",
    operationId: "deletePost",
    tags: [tags.post],
    security: scope.write,
    parameters: [parameterRef(teamName), parameterRef(postNumber)],
    responses: {
      "204": noContent,
    },
  },
};

export default post;
