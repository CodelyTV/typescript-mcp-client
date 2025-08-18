import { Primitives } from "@codelytv/primitives-type";

export class McpTestToolListResponse {
	constructor(
		public readonly name: string,
		public readonly title: string,
		public readonly description: string,
		public readonly inputSchema: object,
	) {}

	static fromPrimitives(tool: Primitives<McpTestToolListResponse>): McpTestToolListResponse {
		return new McpTestToolListResponse(tool.name, tool.title, tool.description, tool.inputSchema);
	}
}
