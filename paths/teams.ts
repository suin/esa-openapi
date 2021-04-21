import { PathItemObject } from "openapi3-ts";
import { parametersRef, schemaRef } from "../dsl";
import { pagination } from "../parameters/pagination";
import { ok } from "../responses/ok";
import { paginatedTeams } from "../schemas/paginatedTeams";
import { tags } from "../tags";

const teams: PathItemObject = {
  get: {
    summary: "所属するチーム一覧を取得する",
    operationId: "getTeams",
    tags: [tags.team],
    parameters: [...parametersRef(pagination)],
    responses: {
      "200": ok(schemaRef(paginatedTeams)),
    },
  },
};

export default teams;
