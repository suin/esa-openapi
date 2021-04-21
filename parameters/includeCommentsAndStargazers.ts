import { outdent } from "outdent";
import { ParameterWithTitle } from "../dsl";

export const includeCommentsAndStargazers: ParameterWithTitle = {
  title: "includeCommentsAndStargazers",
  name: "include",
  in: "query",
  description: outdent`
  - \`comments\` を指定するとコメントの配列を含んだレスポンスを返します。
  - \`comments,comments.stargazers\`を指定するとコメントとコメントに対するStarの配列を含んだレスポンスを返します。
  - \`stargazers\` を指定するとStarの配列を含んだレスポンスを返します。
  - \`stargazers,comments\` のように \`,\` で区切ることで複数指定できます
  `.trim(),
  schema: {
    type: "array",
    items: {
      type: "string",
      enum: ["comments", "comments.stargazers", "stargazers"],
    },
  },
  style: "form",
  explode: false,
};
