import { outdent } from "outdent";
import { schema } from "../dsl";
import { post } from "./post";

export const newPost = schema({
  title: "NewPost",
  description: "新たに投稿する記事を表します。",
  type: "object",
  properties: {
    name: {
      ...post.properties.name,
      description: outdent`
        記事のタイトル
        
        -  タイトル自体に\`#\`を含めたい場合は\`&#35;\`, \`/\`を含めたい場合は\`&#47;\`へそれぞれ置換処理をお願いします。`,
    },
    body_md: post.properties.body_md,
    tags: post.properties.tags,
    category: post.properties.category,
    wip: {
      ...post.properties.wip,
      default: true,
      example: false,
    },
    message: post.properties.message,
    user: {
      type: "string",
      description: outdent`
        記事の投稿者
        
        - チームメンバーのscreen_nameもしくは "esa_bot" を指定することで記事の投稿者を上書きすることができます。
        - このパラメータは **team の owner** だけ が使用することができます。`,
      example: "esa_bot",
    },
    template_post_id: {
      type: "integer",
      description:
        "チーム内のテンプレート記事のID(URLのこの部分: /posts/**{id}**)を指定すると、そのテンプレートが適用された**name**と**body**を持つ記事を作成することが出来ます。",
      example: 2,
    },
  },
  required: ["name"],
} as const);
