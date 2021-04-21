import { PathItemObject } from "openapi3-ts";
import { outdent } from "outdent";
import { parameterRef, schemaRef } from "../../../dsl";
import { teamName } from "../../../parameters/teamName";
import { ok } from "../../../responses/ok";
import { emailsToInvite } from "../../../schemas/emailsToInvite";
import { invitationList } from "../../../schemas/invitationList";
import { tags } from "../../../tags";

const invitations: PathItemObject = {
  get: {
    summary: "招待中のメンバー一覧を取得する",
    description: outdent`
      招待中のメンバーの一覧を取得します。
      
      このAPIは**team**の**owner**だけがご利用可能です。`,
    operationId: "getInvitations",
    tags: [tags.invitation],
    parameters: [parameterRef(teamName)],
    responses: {
      "200": ok(schemaRef(invitationList)),
    },
  },
  post: {
    summary: "Emailで招待する",
    description: outdent`
      招待したいメンバーへ個別の招待URLを発行し、指定したEメールアドレスへ送信します。
      
      このAPIは**team**の**owner**だけがご利用可能です。`,
    operationId: "invite",
    tags: [tags.invitation],
    parameters: [parameterRef(teamName)],
    requestBody: {
      content: {
        "application/json": {
          schema: schemaRef(emailsToInvite),
        },
      },
      required: true,
    },
    responses: {
      "201": ok(schemaRef(invitationList)),
    },
  },
};

export default invitations;
