import {
  ReferenceObject,
  ResponseObject,
  SchemaObject,
} from "openapi3-ts/src/model/OpenApi";
import { rateLimitRef } from "../headers/rateLimit";

export function ok(schema: ReferenceObject | SchemaObject): ResponseObject {
  return {
    description: "成功",
    content: {
      "application/json": { schema },
    },
    headers: rateLimitRef,
  };
}
