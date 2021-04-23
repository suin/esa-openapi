import { schema, schemaRef } from "../dsl";
import { user } from "./user";

export const watcher = schema({
  title: "Watcher",
  description: "記事をWatchしているユーザーを表します。",
  type: "object",
  properties: {
    created_at: {
      type: "string",
      format: "date-time",
      description: "Watchをした日時です。",
      example: "2014-05-10T12:08:55+09:00",
    },
    user: schemaRef(user, "Watchをしたユーザです。"),
  },
  required: ["created_at", "user"],
} as const);
