import { schema } from "../dsl";

export const newStar = schema({
  title: "NewStar",
  description: "新たにStarする内容を表します。",
  type: "object",
  properties: {
    body: {
      type: "string",
      description: "引用Starの本文です。",
      example: "foo bar",
    },
  },
} as const);
