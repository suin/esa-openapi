import { PathItemObject } from "openapi3-ts";
import { parameterRef } from "../../../../../dsl";
import { postNumber } from "../../../../../parameters/postNumber";
import { teamName } from "../../../../../parameters/teamName";
import { noContent } from "../../../../../responses/noContent";
import { tags } from "../../../../../tags";

const watch: PathItemObject = {
  post: {
    summary: "記事をWatchする",
    description: "指定された記事にWatchをします。",
    operationId: "watchPost",
    tags: [tags.watch],
    parameters: [parameterRef(teamName), parameterRef(postNumber)],
    responses: {
      "204": noContent,
    },
  },
  delete: {
    summary: "記事のWatchを取り消す",
    description: "指定された記事へのWatchを取り消します。",
    operationId: "unwachPost",
    tags: [tags.watch],
    parameters: [parameterRef(teamName), parameterRef(postNumber)],
    responses: {
      "204": noContent,
    },
  },
};

export default watch;
