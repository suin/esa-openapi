import { HeadersObject } from "openapi3-ts";
import { headerRef } from "../dsl";

export const rateLimit: HeadersObject = {
  "X-RateLimit-Limit": {
    description: "ユーザ毎に15分間に75リクエストまで受け付けます。",
    schema: {
      type: "integer",
    },
    required: true,
    example: 75,
  },
  "X-RateLimit-Remaining": {
    description: "残りのリクエスト数",
    schema: {
      type: "integer",
    },
    required: true,
    example: 73,
  },
  "X-RateLimit-Reset": {
    description: "利用制限が解除される日時のUnixタイムスタンプ",
    schema: {
      type: "integer",
    },
    required: true,
    example: 1491543000,
  },
};

export const rateLimitRef: HeadersObject = Object.fromEntries(
  Object.keys(rateLimit).map((name) => [name, headerRef({ name })])
);
