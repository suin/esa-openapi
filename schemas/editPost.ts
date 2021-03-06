import { outdent } from "outdent";
import { schema } from "../dsl";
import { newPost } from "./newPost";
import { post } from "./post";

export const editPost = schema({
  title: "EditPost",
  type: "object",
  properties: {
    name: newPost.properties.name,
    body_md: newPost.properties.body_md,
    tags: newPost.properties.tags,
    category: newPost.properties.category,
    wip: {
      ...post.properties.wip,
      default: true,
      example: false,
    },
    message: newPost.properties.message,
    created_by: {
      type: "string",
      description: outdent`
        記事の投稿者
        
        - チームメンバーのscreen_nameもしくは "esa_bot" を指定することで記事の **作成者** を上書きすることができます。
        - このパラメータは **team の owner** だけ が使用することができます。`,
      example: "esa_bot",
    },
    updated_by: {
      type: "string",
      description: outdent`
        記事の更新者
        
        - チームメンバーのscreen_nameもしくは "esa_bot" を指定することで記事の **更新者** を上書きすることができます。
        - このパラメータは **team の owner** だけ が使用することができます。`,
      example: "esa_bot",
    },
    original_revision: {
      title: "OriginalRevision",
      type: "object",
      description: outdent`
        リクエストに正常な \`post.body_md\` パラメータと \`post.original_revision.*\` パラメータが存在する場合、記事更新時に3 way mergeが行われます。original_revisionパラメータが存在しない場合は、変更は常に後勝ちになります。

        > [release_note/2014/12/23/記事保存時の自動マージ - docs.esa.io](https://docs.esa.io/posts/35)`,
      properties: {
        body_md: {
          type: "string",
          description: "変更前の記事の本文です",
          example: "# Getting Started",
        },
        number: {
          type: "integer",
          description: "変更前の記事のrevision_numberを指定します",
          example: 1,
        },
        user: {
          type: "string",
          description: "変更前の記事の最終更新者のscreen_nameを指定します",
          example: "esa_bot",
        },
      },
      required: ["body_md", "number", "user"],
    },
  },
});
