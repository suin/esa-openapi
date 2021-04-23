import { ParameterObject, ReferenceObject, SchemaObject } from "openapi3-ts";

export interface SchemaObjectWithTitle extends SchemaObject {
  title: string;
}

export interface ParameterWithTitle extends ParameterObject {
  title: string;
}

export function schemaRef(
  schema: Pick<SchemaObjectWithTitle, "title">
): ReferenceObject;
export function schemaRef(
  schema: Pick<SchemaObjectWithTitle, "title">,
  rel: string
): { allOf: [ReferenceObject]; description: string };
export function schemaRef(
  schema: Pick<SchemaObjectWithTitle, "title">,
  rel?: string
): ReferenceObject | { allOf: [ReferenceObject]; description: string } {
  if (rel) {
    return {
      allOf: [{ $ref: `#/components/schemas/${schema.title}` }],
      description: rel,
    };
  }
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

export function schema<T extends Schema.All & { readonly title: string }>(
  schema: T
): T {
  return schema;
}

export namespace Schema {
  interface Any<T> {
    readonly title?: string;
    readonly description?: string;
    readonly example?: T | null;
    readonly enum?: ReadonlyArray<T>;
    readonly nullable?: boolean;
  }

  export type All =
    | Null
    | Boolean
    | Integer
    | Number
    | String
    | Array
    | Object
    | AllOf;

  export interface Reference {
    $ref: string;
  }

  export interface Null extends Any<null> {
    readonly type: "null";
  }

  export interface Boolean extends Any<boolean> {
    readonly type: "boolean";
  }

  export interface Integer extends Any<number | bigint> {
    readonly type: "integer";
    readonly format?:
      | "int32" // signed 32 bits
      | "int64"; // signed 64 bits (a.k.a long)
  }

  export interface Number extends Any<number | bigint> {
    readonly type: "number";
    readonly format?: "float" | "double";
  }

  export interface String extends Any<string> {
    readonly type: "string";
    readonly format?:
      | "byte" // base64 encoded characters
      | "binary" // any sequence of octets
      | "date" // As defined by full-date - RFC3339
      | "date-time" // As defined by date-time - RFC3339
      | "password" // A hint to UIs to obscure input.
      | "email"
      | "url";
  }

  export interface Array extends Any<any> {
    readonly type: "array";
    readonly items: All | Reference;
  }

  export interface Object<
    T extends {
      readonly [K: string]: All | Reference;
    } = {
      readonly [K: string]: All | Reference;
    }
  > extends Any<{ [K in keyof T]?: any }> {
    readonly title: string;
    readonly type: "object";
    readonly properties?: T;
    readonly required?: ReadonlyArray<string>;
  }

  export interface AllOf extends Any<any> {
    readonly allOf: ReadonlyArray<All | Reference>;
  }
}
