import { Primitives } from "@codelytv/primitives-type";

import { McpResourceListResponse } from "./McpResourceListResponse";

export class McpResourcesListResponse {
	constructor(public readonly resources: McpResourceListResponse[]) {}

	static fromPrimitives(
		primitives: Primitives<McpResourcesListResponse>,
	): McpResourcesListResponse {
		return new McpResourcesListResponse(
			primitives.resources.map((resource) => McpResourceListResponse.fromPrimitives(resource)),
		);
	}

	uris(): string[] {
		return this.resources.map((resource) => resource.uri);
	}
}
