import { PathItemObject } from "openapi3-ts";
import { parameterRef, schemaRef } from "../../../dsl";
import { teamName } from "../../../parameters/teamName";
import { ok } from "../../../responses/ok";
import { createdEmoji } from "../../../schemas/createdEmoji";
import { emojiList } from "../../../schemas/emojiList";
import { createEmojiBody } from "../../../schemas/createEmojiBody";
import { scope } from "../../../security";
import { tags } from "../../../tags";

const emojis: PathItemObject = {
  get: {
    summary: "絵文字一覧を取得する",
    description:
      "チームで利用可能な絵文字を取得します。URIクエリ文字列を含めない場合、チーム固有の絵文字だけを取得します。",
    operationId: "getEmojis",
    tags: [tags.emoji],
    parameters: [
      parameterRef(teamName),
      {
        name: "include",
        in: "query",
        description:
          "`all`を指定すると、チーム固有の絵文字だけではなく、すべての絵文字を返します。",
        schema: {
          type: "string",
          enum: ["all"],
          example: "all",
        },
      },
    ],
    responses: {
      "200": ok(schemaRef(emojiList)),
    },
  },
  post: {
    summary: "絵文字を登録する",
    description: "新しい絵文字を登録します。",
    operationId: "createEmoji",
    tags: [tags.emoji],
    security: scope.write,
    parameters: [parameterRef(teamName)],
    requestBody: {
      content: {
        "application/json": {
          schema: schemaRef(createEmojiBody),
        },
        "multipart/form-data": {
          schema: schemaRef(createEmojiBody),
        },
      },
      required: true,
    },
    responses: {
      "201": ok(schemaRef(createdEmoji)),
    },
  },
};

export default emojis;
