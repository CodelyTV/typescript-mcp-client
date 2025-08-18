import { Primitives } from "@codelytv/primitives-type";

export class McpTestPromptListResponse {
	constructor(
		public readonly name: string,
		public readonly title: string,
		public readonly description: string,
		public readonly args: object,
	) {}

	static fromPrimitives(prompt: Primitives<McpTestPromptListResponse>): McpTestPromptListResponse {
		return new McpTestPromptListResponse(
			prompt.name,
			prompt.title,
			prompt.description,
			prompt.args,
		);
	}
}
