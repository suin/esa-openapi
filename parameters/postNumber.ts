import { ParameterWithTitle } from "../dsl";

export const postNumber: ParameterWithTitle = {
  title: "postNumber",
  name: "post_number",
  in: "path",
  description: "記事ID",
  required: true,
  schema: {
    type: "integer",
    example: 1,
  },
};
