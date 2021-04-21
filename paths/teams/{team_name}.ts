import { PathItemObject } from "openapi3-ts";
import { parameterRef, schemaRef } from "../../dsl";
import { teamName } from "../../parameters/teamName";
import { ok } from "../../responses/ok";
import { team as teamSchema } from "../../schemas/team";
import { tags } from "../../tags";

const team: PathItemObject = {
  get: {
    summary: "所属するチームを取得する",
    operationId: "getTeam",
    tags: [tags.team],
    parameters: [parameterRef(teamName)],
    responses: {
      "200": ok(schemaRef(teamSchema)),
    },
  },
};

export default team;
