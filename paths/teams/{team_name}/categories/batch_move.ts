import { PathItemObject } from "openapi3-ts";
import { parameterRef, schemaRef } from "../../../../dsl";
import { teamName } from "../../../../parameters/teamName";
import { ok } from "../../../../responses/ok";
import { batchMoveOptions } from "../../../../schemas/batchMoveOptions";
import { batchMoveResult } from "../../../../schemas/batchMoveResult";
import { scope } from "../../../../security";
import { tags } from "../../../../tags";

const batchMove: PathItemObject = {
  post: {
    summary: "カテゴリを一括移動する",
    description: "指定されたカテゴリを配下のカテゴリを含めて一括で変更します。",
    operationId: "batchMoveCategory",
    tags: [tags.category],
    security: scope.write,
    parameters: [parameterRef(teamName)],
    requestBody: {
      content: {
        "application/json": {
          schema: schemaRef(batchMoveOptions),
        },
      },
      required: true,
    },
    responses: {
      "200": ok(schemaRef(batchMoveResult)),
    },
  },
};

export default batchMove;
