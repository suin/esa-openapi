import { schema, schemaRef } from "../dsl";
import { newEmoji } from "./newEmoji";

export const createEmojiBody = schema({
  title: "CreateEmojiBody",
  description: "新たに登録する絵文字を表します。",
  type: "object",
  properties: {
    emoji: schemaRef(newEmoji),
  },
  required: ["emoji"],
} as const);
