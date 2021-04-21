import { SchemaObjectWithTitle } from "../dsl";

export const batchMoveOptions: SchemaObjectWithTitle = {
  title: "BatchMoveOptions",
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
  },
  required: ["from", "to"],
};
