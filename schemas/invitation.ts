import { outdent } from "outdent";
import { schema } from "../dsl";

export const invitation = schema({
  title: "Invitation",
  description: "Emailによる招待を表します。",
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
      description: "招待したEメールアドレスです",
      example: "foo@example.com",
    },
    code: {
      type: "string",
      description: outdent`
        招待の識別子です
        
        削除時に利用します`,
      example: "mee93383edf699b525e01842d34078e28",
    },
    expires_at: {
      type: "string",
      format: "date-time",
      description: "招待の有効期限です",
      example: "2017-08-17T12:00:41+09:00",
    },
    url: {
      type: "string",
      format: "url",
      description: "招待されたメンバーがチームへ参加する際に使うURLです",
      example:
        "https://docs.esa.io/team/invitations/mee93383edf699b525e01842d34078e28/join",
    },
  },
  required: ["email", "code", "expires_at", "url"],
} as const);
