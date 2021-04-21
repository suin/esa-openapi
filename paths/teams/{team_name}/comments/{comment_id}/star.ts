import { PathItemObject } from "openapi3-ts";
import { parameterRef, schemaRef } from "../../../../../dsl";
import { commentId } from "../../../../../parameters/commentId";
import { teamName } from "../../../../../parameters/teamName";
import { noContent } from "../../../../../responses/noContent";
import { newStar } from "../../../../../schemas/newStar";
import { tags } from "../../../../../tags";

const star: PathItemObject = {
  post: {
    summary: "コメントをStarする",
    description: "指定されたコメントにStarをします。",
    operationId: "starComment",
    tags: [tags.star],
    parameters: [parameterRef(teamName), parameterRef(commentId)],
    requestBody: {
      content: {
        "application/json": {
          schema: schemaRef(newStar),
        },
      },
      required: true,
    },
    responses: {
      "204": noContent,
    },
  },
  delete: {
    summary: "コメントのStarを取り消す",
    description: "指定されたコメントへのStarを取り消します。",
    operationId: "unstarComment",
    tags: [tags.star],
    parameters: [parameterRef(teamName), parameterRef(commentId)],
    responses: {
      "204": noContent,
    },
  },
};

export default star;
