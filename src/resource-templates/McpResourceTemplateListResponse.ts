import { Primitives } from "@codelytv/primitives-type";

export class McpResourceTemplateListResponse {
	constructor(
		public readonly name: string,
		public readonly title: string,
		public readonly uriTemplate: string,
		public readonly description: string,
	) {}

	static fromPrimitives(
		resourceTemplate: Primitives<McpResourceTemplateListResponse>,
	): McpResourceTemplateListResponse {
		return new McpResourceTemplateListResponse(
			resourceTemplate.name,
			resourceTemplate.title,
			resourceTemplate.uriTemplate,
			resourceTemplate.description,
		);
	}
}
