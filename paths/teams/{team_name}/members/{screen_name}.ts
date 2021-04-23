import { PathItemObject } from "openapi3-ts";
import { outdent } from "outdent";
import { parameterRef } from "../../../../dsl";
import { teamName } from "../../../../parameters/teamName";
import { noContent } from "../../../../responses/noContent";
import { scope } from "../../../../security";
import { tags } from "../../../../tags";

const member: PathItemObject = {
  delete: {
    summary: "メンバーを削除する",
    description: outdent`
          指定した screen_name のメンバーをチームから削除します。
          
          - チームの owner である必要があります
          - APIで自分自身をチームから削除することはできません。
          `.trim(),
    operationId: "deleteMember",
    tags: [tags.member],
    security: scope.write,
    parameters: [
      parameterRef(teamName),
      {
        name: "screen_name",
        description: "削除するメンバーのscreen_name",
        in: "path",
        required: true,
        schema: {
          type: "string",
          example: "alice",
        },
      },
    ],
    responses: {
      "204": noContent,
    },
  },
};

export default member;
