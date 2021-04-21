import { PathItemObject } from "openapi3-ts";
import { outdent } from "outdent";
import { parameterRef, parametersRef, schemaRef } from "../../../dsl";
import { order } from "../../../parameters/order";
import { pagination } from "../../../parameters/pagination";
import { teamName } from "../../../parameters/teamName";
import { ok } from "../../../responses/ok";
import { paginatedMembers } from "../../../schemas/paginatedMembers";
import { tags } from "../../../tags";

const members: PathItemObject = {
  get: {
    summary: "メンバーを取得する",
    operationId: "getMembers",
    tags: [tags.member],
    parameters: [
      parameterRef(teamName),
      {
        name: "sort",
        in: "query",
        schema: {
          type: "string",
          enum: ["posts_count", "joined", "last_accessed"],
          description: outdent`
            設定可能な値:
            
            - \`posts_count\`: チーム内での記事の作成数 (default)
            - \`joined\`: チームへ参加日時
            - \`last_accessed\`: 最終アクセス日時`.trim(),
        },
      },
      parameterRef(order),
      ...parametersRef(pagination),
    ],
    responses: {
      "200": ok(schemaRef(paginatedMembers)),
    },
  },
};

export default members;
