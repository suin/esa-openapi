import { outdent } from "outdent";
import { schema } from "../dsl";

export const newEmoji = schema({
  title: "NewEmoji",
  type: "object",
  properties: {
    code: {
      type: "string",
      description:
        "登録したい絵文字のコードです。絵文字を入力する際の両端の**:**を含めずに指定して下さい。",
      example: "team_emoji",
    },
    origin_code: {
      type: "string",
      description:
        "既に登録されている絵文字に対するエイリアス絵文字を作成する際に指定して下さい。",
    },
    image: {
      type: "string",
      format: "binary",
      description: outdent`
            絵文字の画像データです。
            
            - BASE64でencodeしたStringを指定して下さい。
            - 新しい絵文字を作成する場合に指定して下さい。エイリアス絵文字を作成する際には不要です。
            - 画像の条件
              - 64KB以下
              - 128px x 128px以上
              - GIF or PNG`,
      example: "BASE64 String",
    },
  },
  required: ["code"],
} as const);
