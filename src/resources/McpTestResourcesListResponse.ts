import { Primitives } from "@codelytv/primitives-type";

import { McpTestResourceListResponse } from "./McpTestResourceListResponse";

export class McpTestResourcesListResponse {
	constructor(public readonly resources: McpTestResourceListResponse[]) {}

	static fromPrimitives(
		primitives: Primitives<McpTestResourcesListResponse>,
	): McpTestResourcesListResponse {
		return new McpTestResourcesListResponse(
			primitives.resources.map((resource) => McpTestResourceListResponse.fromPrimitives(resource)),
		);
	}

	uris(): string[] {
		return this.resources.map((resource) => resource.uri);
	}
}
