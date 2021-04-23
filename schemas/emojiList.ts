import { schema, schemaRef } from "../dsl";
import { emoji } from "./emoji";

export const emojiList = schema({
  title: "EmojiList",
  description: "絵文字のリストを表します",
  type: "object",
  properties: {
    emojis: {
      type: "array",
      items: schemaRef(emoji),
    },
  },
  required: ["emojis"],
} as const);
