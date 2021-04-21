import { outdent } from "outdent";
import { ParameterWithTitle } from "../dsl";

export const order: ParameterWithTitle = {
  title: "order",
  name: "order",
  in: "query",
  schema: {
    type: "string",
    enum: ["asc", "desc"],
  },
  description: outdent`
    設定可能な値:
    
    - \`desc\`: 降順 (default)
    - \`asc\`: 昇順`.trim(),
};
