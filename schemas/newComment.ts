import { outdent } from "outdent";
import { schema } from "../dsl";

export const newComment = schema({
  title: "NewComment",
  type: "object",
  properties: {
    body_md: {
      type: "string",
    },
    user: {
      type: "string",
      description: outdent`
        コメントの投稿者
        
        - チームメンバーのscreen_nameもしくは "esa_bot" を指定することでコメントの投稿者を上書きすることができます。
        - このパラメータは **team の owner** だけ が使用することができます。`,
      example: "esa_bot",
    },
  },
  required: ["body_md"],
});
