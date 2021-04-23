import { schema } from "../dsl";

export const batchMoveResult = schema({
  title: "BatchMoveResult",
  description: "",
  type: "object",
  properties: {
    from: {
      type: "string",
      description: "変更元のカテゴリです",
      example: "/foo/bar/",
    },
    to: {
      type: "string",
      description: "変更先のカテゴリです",
      example: "/baz/",
    },
    count: {
      type: "integer",
      description: "サブカテゴリを含む変更されたカテゴリの数を表します",
      example: 3,
    },
  },
  required: ["from", "to", "count"],
} as const);
