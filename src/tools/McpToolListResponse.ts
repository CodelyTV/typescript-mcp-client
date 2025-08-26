import { Primitives } from "@codelytv/primitives-type";

export class McpToolListResponse {
	constructor(
		public readonly name: string,
		public readonly title: string,
		public readonly description: string,
		public readonly inputSchema: object,
	) {}

	static fromPrimitives(tool: Primitives<McpToolListResponse>): McpToolListResponse {
		return new McpToolListResponse(tool.name, tool.title, tool.description, tool.inputSchema);
	}
}
