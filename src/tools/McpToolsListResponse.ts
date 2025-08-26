import { Primitives } from "@codelytv/primitives-type";

import { McpToolListResponse } from "./McpToolListResponse";

export class McpToolsListResponse {
	constructor(public readonly tools: McpToolListResponse[]) {}

	static fromPrimitives(primitives: Primitives<McpToolsListResponse>): McpToolsListResponse {
		return new McpToolsListResponse(
			primitives.tools.map((tool) => McpToolListResponse.fromPrimitives(tool)),
		);
	}

	names(): string[] {
		return this.tools.map((tool) => tool.name);
	}
}
