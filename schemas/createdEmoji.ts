import { SchemaObjectWithTitle } from "../dsl";

export const createdEmoji: SchemaObjectWithTitle = {
  title: "CreatedEmoji",
  description: "新たに登録された絵文字を表します",
  type: "object",
  properties: {
    code: {
      type: "string",
      description: "絵文字を入力する際に使うコードです",
      example: "team_emoji",
    },
  },
  required: ["code"],
};
