import { ParameterWithTitle } from "../dsl";

export const commentId: ParameterWithTitle = {
  title: "commentId",
  name: "comment_id",
  in: "path",
  description: "コメントID",
  required: true,
  schema: {
    type: "integer",
    example: 1,
  },
};
