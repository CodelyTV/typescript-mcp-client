import { Primitives } from "@codelytv/primitives-type";

import { McpResourceTemplateListResponse } from "./McpResourceTemplateListResponse";

export class McpResourceTemplatesListResponse {
	constructor(public readonly resourceTemplates: McpResourceTemplateListResponse[]) {}

	static fromPrimitives(
		primitives: Primitives<McpResourceTemplatesListResponse>,
	): McpResourceTemplatesListResponse {
		return new McpResourceTemplatesListResponse(
			primitives.resourceTemplates.map((resourceTemplate) =>
				McpResourceTemplateListResponse.fromPrimitives(resourceTemplate),
			),
		);
	}

	uris(): string[] {
		return this.resourceTemplates.map((resource) => resource.uriTemplate);
	}
}
