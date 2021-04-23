import { schema } from "../dsl";

export const inviteBody = schema({
  title: "InviteBody",
  description: "招待したいメンバーのEメールアドレスを表します",
  type: "object",
  properties: {
    member: {
      title: "EmailsToInvite",
      type: "object",
      properties: {
        emails: {
          type: "array",
          description: "招待したいメンバーのEメールアドレスです",
          items: {
            type: "string",
            format: "email",
          },
          example: ["foo@example.com", "bar@example.com"],
        },
      },
      required: ["emails"],
    },
  },
  required: ["member"],
} as const);
