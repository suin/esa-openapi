import { SchemaObjectWithTitle, schemaRef } from "../dsl";
import { stargazer } from "./stargazer";
import { user } from "./user";

export const comment: SchemaObjectWithTitle = {
  title: "Comment",
  description: "ユーザが作成したコメントを表します。",
  type: "object",
  properties: {
    id: {
      type: "integer",
      description: "コメントを一意に識別するIDです",
    },
    body_md: {
      type: "string",
      description: "Markdownで書かれたコメントの本文です",
    },
    body_html: {
      type: "string",
      description: "HTMLに変換されたコメントの本文です",
    },
    created_at: {
      type: "string",
      format: "date-time",
      description: "コメントが作成された日時です",
    },
    updated_at: {
      type: "string",
      format: "date-time",
      description: "コメントが更新された日時です",
    },
    post_number: {
      type: "integer",
      description: "",
    },
    url: {
      type: "string",
      format: "url",
      description: "コメントのpermalinkです",
    },
    created_by: {
      allOf: [schemaRef(user)],
      description: "コメントを作成したユーザを表します。",
    },
    stargazers_count: {
      type: "integer",
      description: "コメントにStarをしている人数を表します",
    },
    star: {
      type: "boolean",
      description: "ユーザーがコメントをStarしているかどうかを表します",
    },
    stargazers: {
      type: "array",
      description: "コメントにStarをしたユーザ一覧です",
      items: schemaRef(stargazer),
    },
  },
  required: [
    "id",
    "body_md",
    "body_html",
    "created_at",
    "updated_at",
    "post_number",
    "url",
    "created_by",
    "stargazers_count",
    "star",
  ],
};
