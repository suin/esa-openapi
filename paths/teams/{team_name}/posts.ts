import { PathItemObject } from "openapi3-ts";
import { outdent } from "outdent";
import { parameterRef, parametersRef, schemaRef } from "../../../dsl";
import { includeCommentsAndStargazers } from "../../../parameters/includeCommentsAndStargazers";
import { order } from "../../../parameters/order";
import { pagination } from "../../../parameters/pagination";
import { teamName } from "../../../parameters/teamName";
import { ok } from "../../../responses/ok";
import { createPostBody } from "../../../schemas/createPostBody";
import { paginatedPosts } from "../../../schemas/paginatedPosts";
import { post } from "../../../schemas/post";
import { scope } from "../../../security";
import { tags } from "../../../tags";

const posts: PathItemObject = {
  get: {
    summary: "記事一覧を取得する",
    operationId: "getPosts",
    tags: [tags.post],
    parameters: [
      parameterRef(teamName),
      {
        name: "q",
        in: "query",
        description: "記事を絞り込むための条件を指定します",
        schema: {
          type: "string",
        },
      },
      parameterRef(includeCommentsAndStargazers),
      {
        name: "sort",
        in: "query",
        description: outdent`
          記事の並び順を指定します

          - 設定可能な値
            - \`updated\` (default)
                - 記事の更新日時
            - \`created\`
                - 記事の作成日時
            - \`number\`
                - 記事番号
            - \`stars\`
                - 記事へのStarの数
            - \`watches\`
                - 記事へのWatchの数
            - \`comments\`
                - 記事へのCommentの数
            - \`best_match\`
                - 総合的な記事のスコア`.trim(),
        schema: {
          type: "string",
          enum: [
            "updated",
            "created",
            "number",
            "stars",
            "watches",
            "comments",
            "best_match",
          ],
        },
      },
      parameterRef(order),
      ...parametersRef(pagination),
    ],
    responses: {
      "200": ok(schemaRef(paginatedPosts)),
    },
  },
  post: {
    summary: "記事を投稿する",
    operationId: "createPost",
    tags: [tags.post],
    security: scope.write,
    parameters: [parameterRef(teamName)],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: schemaRef(createPostBody),
        },
      },
    },
    responses: {
      "201": ok(schemaRef(post)),
    },
  },
};

export default posts;
