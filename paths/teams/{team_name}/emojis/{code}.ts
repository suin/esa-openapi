import { PathItemObject } from "openapi3-ts";
import { parameterRef } from "../../../../dsl";
import { teamName } from "../../../../parameters/teamName";
import { noContent } from "../../../../responses/noContent";
import { scope } from "../../../../security";
import { tags } from "../../../../tags";

const emoji: PathItemObject = {
  delete: {
    summary: "絵文字を削除する",
    description: "登録したチーム固有の絵文字を削除します。",
    operationId: "deleteEmoji",
    tags: [tags.emoji],
    security: scope.write,
    parameters: [
      parameterRef(teamName),
      {
        name: "code",
        in: "path",
        description: "絵文字コード",
        schema: {
          type: "string",
          example: "team_emoji",
        },
        required: true,
      },
    ],
    responses: {
      "204": noContent,
    },
  },
};

export default emoji;
