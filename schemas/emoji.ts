import { outdent } from "outdent";
import { schema } from "../dsl";

export const emoji = schema({
  title: "Emoji",
  description: "絵文字を表します",
  type: "object",
  properties: {
    code: {
      type: "string",
      description: "絵文字を入力する際に使うコードです",
      example: "grinning",
    },
    aliases: {
      type: "array",
      description: "絵文字に対するエイリアスコードです",
      items: {
        type: "string",
      },
      example: ["grinning"],
    },
    category: {
      type: "string",
      description: outdent`
        絵文字のカテゴリです
        
        カスタム絵文字は\`Custom\`です。`,
      example: "People",
    },
    url: {
      type: "string",
      format: "url",
      description: "絵文字の画像URLです",
      example: "https://assets.esa.io/images/emoji/unicode/1f600.png",
    },
  },
  required: ["code", "aliases", "category", "url"],
} as const);
