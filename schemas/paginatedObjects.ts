import { ReferenceObject, SchemaObject } from "openapi3-ts";
import { SchemaObjectWithTitle } from "../dsl";
import pluralize from "pluralize";

export const paginatedObjects = (
  key: string,
  name: string,
  schema: SchemaObject | ReferenceObject
): SchemaObjectWithTitle => {
  return {
    title: `Paginated${pluralize(name)}`,
    type: "object",
    properties: {
      [key]: {
        type: "array",
        description: `${name}のリスト`,
        items: schema,
      },
      prev_page: {
        type: "integer",
        nullable: true,
        description: "1つ前のpage番号。存在しない場合はnull",
        example: null,
      },
      next_page: {
        type: "integer",
        nullable: true,
        description: "1つ先のpage番号。存在しない場合はnull",
        example: 2,
      },
      total_count: {
        type: "integer",
        description: "リソースの総数",
        example: 30,
      },
      page: {
        type: "integer",
        description: "現在のページ番号",
        example: 1,
      },
      per_page: {
        type: "integer",
        description: "1ページあたりに含まれる要素数",
        example: 20,
      },
      max_per_page: {
        type: "integer",
        description: "per_pageに指定可能な数の最大値",
        example: 100,
      },
    },
    required: [
      key,
      "prev_page",
      "next_page",
      "total_count",
      "page",
      "per_page",
      "max_per_page",
    ],
  };
};
