import { schema, schemaRef } from "../dsl";
import { invitation } from "./invitation";

export const invitationList = schema({
  title: "InvitationList",
  description: "Emailによる招待のリストを表します",
  type: "object",
  properties: {
    invitations: {
      type: "array",
      items: schemaRef(invitation),
    },
  },
  required: ["invitations"],
} as const);
