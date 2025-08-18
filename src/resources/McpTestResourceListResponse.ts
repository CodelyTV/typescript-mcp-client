import { Primitives } from "@codelytv/primitives-type";

export class McpTestResourceListResponse {
	constructor(
		public readonly uri: string,
		public readonly name: string,
		public readonly title: string,
		public readonly description: string,
	) {}

	static fromPrimitives(
		resource: Primitives<McpTestResourceListResponse>,
	): McpTestResourceListResponse {
		return new McpTestResourceListResponse(
			resource.uri,
			resource.name,
			resource.title,
			resource.description,
		);
	}
}
