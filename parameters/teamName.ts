import { ParameterWithTitle } from "../dsl";

export const teamName: ParameterWithTitle = {
  title: "teamName",
  name: "team_name",
  in: "path",
  description: "γγΌγ ε",
  required: true,
  schema: {
    type: "string",
    example: "docs",
  },
};
