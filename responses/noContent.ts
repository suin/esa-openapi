import { ResponseObject } from "openapi3-ts/src/model/OpenApi";
import { rateLimitRef } from "../headers/rateLimit";

export const noContent: ResponseObject = {
  description: "成功",
  headers: rateLimitRef,
};
