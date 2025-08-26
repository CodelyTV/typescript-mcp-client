import { Primitives } from "@codelytv/primitives-type";

export class McpResourceListResponse {
	constructor(
		public readonly uri: string,
		public readonly name: string,
		public readonly title: string,
		public readonly description: string,
	) {}

	static fromPrimitives(resource: Primitives<McpResourceListResponse>): McpResourceListResponse {
		return new McpResourceListResponse(
			resource.uri,
			resource.name,
			resource.title,
			resource.description,
		);
	}
}
