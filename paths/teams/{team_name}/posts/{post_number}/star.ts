import { PathItemObject } from "openapi3-ts";
import { parameterRef, schemaRef } from "../../../../../dsl";
import { postNumber } from "../../../../../parameters/postNumber";
import { teamName } from "../../../../../parameters/teamName";
import { noContent } from "../../../../../responses/noContent";
import { newStar } from "../../../../../schemas/newStar";
import { tags } from "../../../../../tags";

const star: PathItemObject = {
  post: {
    summary: "記事をStarする",
    description: "指定された記事にStarをします。",
    operationId: "starPost",
    tags: [tags.star],
    parameters: [parameterRef(teamName), parameterRef(postNumber)],
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
    summary: "記事のStarを取り消す",
    description: "指定された記事へのStarを取り消します。",
    operationId: "unstarPost",
    tags: [tags.star],
    parameters: [parameterRef(teamName), parameterRef(postNumber)],
    responses: {
      "204": noContent,
    },
  },
};

export default star;
