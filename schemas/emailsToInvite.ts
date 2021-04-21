import { SchemaObjectWithTitle } from "../dsl";

export const emailsToInvite: SchemaObjectWithTitle = {
  title: "EmailsToInvite",
  description: "招待したいメンバーのEメールアドレスを表します",
  type: "object",
  properties: {
    member: {
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
};
