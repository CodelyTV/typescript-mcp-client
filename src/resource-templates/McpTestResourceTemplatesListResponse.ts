import { Primitives } from "@codelytv/primitives-type";

import { McpTestResourceTemplateListResponse } from "./McpTestResourceTemplateListResponse";

export class McpTestResourceTemplatesListResponse {
	constructor(public readonly resourceTemplates: McpTestResourceTemplateListResponse[]) {}

	static fromPrimitives(
		primitives: Primitives<McpTestResourceTemplatesListResponse>,
	): McpTestResourceTemplatesListResponse {
		return new McpTestResourceTemplatesListResponse(
			primitives.resourceTemplates.map((resourceTemplate) =>
				McpTestResourceTemplateListResponse.fromPrimitives(resourceTemplate),
			),
		);
	}

	uris(): string[] {
		return this.resourceTemplates.map((resource) => resource.uriTemplate);
	}
}
