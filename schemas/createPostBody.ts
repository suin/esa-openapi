import { schema, schemaRef } from "../dsl";
import { newPost } from "./newPost";

export const createPostBody = schema({
  title: "CreatePostBody",
  description: "新たに投稿する記事を含んだリクエストボディです。",
  type: "object",
  properties: {
    post: schemaRef(newPost),
  },
  required: ["post"],
} as const);
