import { schema } from "../dsl";

export const tag = schema({
  title: "Tag",
  description: "記事のタグ",
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "タグ名です。",
      example: "markdown",
    },
    posts_count: {
      type: "integer",
      description: "タグ付けされた記事数です。",
      example: 1,
    },
  },
  required: ["name", "posts_count"],
} as const);
