import { Primitives } from "@codelytv/primitives-type";

export class McpTestResourceTemplateListResponse {
	constructor(
		public readonly name: string,
		public readonly title: string,
		public readonly uriTemplate: string,
		public readonly description: string,
	) {}

	static fromPrimitives(
		resourceTemplate: Primitives<McpTestResourceTemplateListResponse>,
	): McpTestResourceTemplateListResponse {
		return new McpTestResourceTemplateListResponse(
			resourceTemplate.name,
			resourceTemplate.title,
			resourceTemplate.uriTemplate,
			resourceTemplate.description,
		);
	}
}
