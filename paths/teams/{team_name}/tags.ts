import { PathItemObject } from "openapi3-ts";
import { parameterRef, parametersRef, schemaRef } from "../../../dsl";
import { teamName } from "../../../parameters/teamName";
import { pagination } from "../../../parameters/pagination";
import { ok } from "../../../responses/ok";
import { paginatedTags } from "../../../schemas/paginatedTags";
import { tags } from "../../../tags";

const teamTags: PathItemObject = {
  get: {
    summary: "タグ一覧をタグ付けされた記事数の降順で取得する",
    operationId: "getTags",
    tags: [tags.tag],
    parameters: [parameterRef(teamName), ...parametersRef(pagination)],
    responses: {
      "200": ok(schemaRef(paginatedTags)),
    },
  },
};

export default teamTags;
