import { Primitives } from "@codelytv/primitives-type";

import { McpTestToolListResponse } from "./McpTestToolListResponse";

export class McpTestToolsListResponse {
	constructor(public readonly tools: McpTestToolListResponse[]) {}

	static fromPrimitives(
		primitives: Primitives<McpTestToolsListResponse>,
	): McpTestToolsListResponse {
		return new McpTestToolsListResponse(
			primitives.tools.map((tool) => McpTestToolListResponse.fromPrimitives(tool)),
		);
	}

	names(): string[] {
		return this.tools.map((tool) => tool.name);
	}
}
