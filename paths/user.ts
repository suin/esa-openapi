import { PathItemObject } from "openapi3-ts";
import { schemaRef } from "../dsl";
import { ok } from "../responses/ok";
import { authenticatedUser } from "../schemas/authenticatedUser";
import { tags } from "../tags";

const user: PathItemObject = {
  get: {
    summary: "認証中のユーザーを取得する",
    description: "現在のアクセストークンで認証中のユーザーの情報を取得します。",
    operationId: "getAuthenticatedUser",
    tags: [tags.user],
    parameters: [
      {
        name: "include",
        description:
          "teams を指定すると所属するチームの配列を含んだレスポンスを返します。",
        in: "query",
        schema: {
          type: "string",
          enum: ["teams"],
        },
      },
    ],
    responses: {
      "200": ok(schemaRef(authenticatedUser)),
    },
  },
};

export default user;
