import {
  HeadersObject,
  OpenApiBuilder as ParentOpenApiBuilder,
  PathsObject,
  SecurityRequirementObject,
  TagObject,
} from "openapi3-ts";
import * as oa from "openapi3-ts/dist/model";
import { PathItemObject } from "openapi3-ts/src/model/OpenApi";
import { ParameterWithTitle, SchemaObjectWithTitle } from "./dsl";

export class OpenApiBuilder extends ParentOpenApiBuilder {
  addTags(tags: ReadonlyArray<TagObject>): this {
    tags.forEach((tag) => this.addTag(tag));
    return this;
  }

  addPaths(paths: PathsObject): this {
    Object.entries(paths).forEach(([name, path]) => this.addPath(name, path));
    return this;
  }

  addHeaders(headers: HeadersObject): this {
    Object.entries(headers).forEach(([name, header]) =>
      this.addHeader(name, header)
    );
    return this;
  }

  addParameters(parameters: Array<ParameterWithTitle>): this {
    for (const parameter of parameters) {
      const { title, ...p } = parameter;
      this.addParameter(title, p);
    }
    return this;
  }

  addSchemas(schemas: Array<SchemaObjectWithTitle>): this {
    for (const schema of schemas) {
      super.addSchema(schema.title, schema);
    }
    return this;
  }

  addSecurity(security: SecurityRequirementObject): this {
    const spec = this.getSpec();
    spec.security ??= [];
    spec.security.push(security);
    return this;
  }

  addTagsToAllOperations(tag: string): this {
    const spec = this.getSpec();
    for (const path of Object.values<PathItemObject>(spec.paths)) {
      for (const method of [
        "get",
        "post",
        "patch",
        "put",
        "delete",
        "head",
        "options",
        "trace",
      ] as const) {
        const operation = path[method];
        if (operation && operation.tags) {
          operation.tags.push(tag);
        }
      }
    }
    return this;
  }
}

export interface OpenApiBuilder extends ParentOpenApiBuilder {
  addOpenApiVersion(openApiVersion: string): OpenApiBuilder;

  addInfo(info: oa.InfoObject): OpenApiBuilder;

  addContact(contact: oa.ContactObject): OpenApiBuilder;

  addLicense(license: oa.LicenseObject): OpenApiBuilder;

  addTitle(title: string): OpenApiBuilder;

  addDescription(description: string): OpenApiBuilder;

  addTermsOfService(termsOfService: string): OpenApiBuilder;

  addVersion(version: string): OpenApiBuilder;

  addPath(path: string, pathItem: oa.PathItemObject): OpenApiBuilder;

  addSchema(
    name: string,
    schema: oa.SchemaObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addResponse(
    name: string,
    response: oa.ResponseObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addParameter(
    name: string,
    parameter: oa.ParameterObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addExample(
    name: string,
    example: oa.ExampleObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addRequestBody(
    name: string,
    reqBody: oa.RequestBodyObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addHeader(
    name: string,
    header: oa.HeaderObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addSecurityScheme(
    name: string,
    secScheme: oa.SecuritySchemeObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addLink(
    name: string,
    link: oa.LinkObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addCallback(
    name: string,
    callback: oa.CallbackObject | oa.ReferenceObject
  ): OpenApiBuilder;

  addServer(server: oa.ServerObject): OpenApiBuilder;

  addTag(tag: oa.TagObject): OpenApiBuilder;

  addExternalDocs(extDoc: oa.ExternalDocumentationObject): OpenApiBuilder;
}
