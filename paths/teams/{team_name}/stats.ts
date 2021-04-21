import { PathItemObject } from "openapi3-ts";
import { parameterRef, schemaRef } from "../../../dsl";
import { teamName } from "../../../parameters/teamName";
import { ok } from "../../../responses/ok";
import { teamStats } from "../../../schemas/teamStats";
import { tags } from "../../../tags";

const stats: PathItemObject = {
  get: {
    summary: "チームの統計情報を取得する",
    operationId: "getTeamStats",
    tags: [tags.team],
    parameters: [parameterRef(teamName)],
    responses: {
      "200": ok(schemaRef(teamStats)),
    },
  },
};

export default stats;
