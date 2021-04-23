import { schema, schemaRef } from "../dsl";
import { user } from "./user";

export const stargazer = schema({
  title: "Stargazer",
  description: "記事にStarをしている人",
  type: "object",
  properties: {
    created_at: {
      type: "string",
      format: "date-time",
      description: "Starをした日時です。",
      example: "2016-05-05T11:40:54+09:00",
    },
    body: {
      type: "string",
      nullable: true,
      description: "引用Starの本文です。",
      example: null,
    },
    user: schemaRef(user, "Starをしたユーザです。"),
  },
  required: ["created_at", "body", "user"],
} as const);
