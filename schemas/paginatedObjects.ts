import pluralize from "pluralize";
import { schema, Schema } from "../dsl";

export const paginatedObjects = <T extends Schema.All | Schema.Reference>(
  key: string,
  name: string,
  _schema: T
) => {
  return schema({
    title: `Paginated${pluralize(name)}`,
    type: "object",
    properties: {
      [key]: {
        type: "array",
        description: `${name}のリスト`,
        items: _schema,
      } as any,
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
  } as const);
};
