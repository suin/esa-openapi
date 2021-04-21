import { ParameterObject, ReferenceObject, SchemaObject } from "openapi3-ts";

export interface SchemaObjectWithTitle extends SchemaObject {
  title: string;
}

export interface ParameterWithTitle extends ParameterObject {
  title: string;
}

export function schemaRef(
  schema: Pick<SchemaObjectWithTitle, "title">
): ReferenceObject {
  return { $ref: `#/components/schemas/${schema.title}` };
}

export function parameterRef({
  title,
}: Pick<ParameterWithTitle, "title">): ReferenceObject {
  return { $ref: `#/components/parameters/${title}` };
}

export function parametersRef(
  parameters: Array<Pick<ParameterWithTitle, "title">>
): Array<ReferenceObject> {
  return parameters.map(parameterRef);
}

export function headerRef({ name }: { name: string }): ReferenceObject {
  return { $ref: `#/components/headers/${name}` };
}
