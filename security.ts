import { SecurityRequirementObject } from "openapi3-ts";

const write: SecurityRequirementObject[] = [
  { OAuth2: ["write"] },
  { AccessTokenHeader: ["write"] },
  { AccessTokenQueryParam: ["write"] },
];

const read: SecurityRequirementObject[] = [
  { OAuth2: ["read"] },
  { AccessTokenHeader: ["read"] },
  { AccessTokenQueryParam: ["read"] },
];

export const scope = { read, write };
