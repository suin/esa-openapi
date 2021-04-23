import { PathItemObject } from "openapi3-ts";
import { outdent } from "outdent";
import { parameterRef } from "../../../../dsl";
import { teamName } from "../../../../parameters/teamName";
import { noContent } from "../../../../responses/noContent";
import { scope } from "../../../../security";
import { tags } from "../../../../tags";

const invitation: PathItemObject = {
  delete: {
    summary: "招待を取り下げる",
    description: outdent`
      招待中のメンバーの招待を削除します。招待時に送信されたメールに記載された招待用のURLは無効となります。
      このAPIは**team**の**owner**だけがご利用可能です。`,
    operationId: "disinvite",
    tags: [tags.invitation],
    security: scope.write,
    parameters: [
      parameterRef(teamName),
      {
        name: "code",
        in: "path",
        description: "招待時の識別子を指定します",
        required: true,
        schema: {
          type: "string",
          example: "mee93383edf699b525e01842d34078e28",
        },
      },
    ],
    responses: {
      "204": noContent,
    },
  },
};

export default invitation;
