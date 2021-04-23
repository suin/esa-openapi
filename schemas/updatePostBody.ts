import { schema, schemaRef } from "../dsl";
import { editPost } from "./editPost";

export const updatePostBody = schema({
  title: "UpdatePostBody",
  description: "記事の更新内容を表します。",
  type: "object",
  properties: {
    post: schemaRef(editPost),
  },
  required: ["post"],
} as const);
