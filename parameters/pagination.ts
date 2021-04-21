import { ParameterWithTitle } from "../dsl";

export const paginationPage: ParameterWithTitle = {
  title: "paginationPage",
  name: "page",
  in: "query",
  description: "ページ番号",
  schema: {
    type: "integer",
    example: 1,
  },
};

export const paginationPerPage: ParameterWithTitle = {
  title: "paginationPerPage",
  name: "per_page",
  in: "query",
  description: "1ページあたりに含まれる要素数",
  schema: {
    type: "integer",
    example: 100,
  },
};

export const pagination = [paginationPage, paginationPerPage];
