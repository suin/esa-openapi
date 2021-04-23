import { schema, schemaRef } from "../dsl";
import { newComment } from "./newComment";

export const createCommentBody = schema({
  title: "CreateCommentBody",
  type: "object",
  properties: {
    comment: schemaRef(newComment),
  },
  required: ["comment"],
} as const);
