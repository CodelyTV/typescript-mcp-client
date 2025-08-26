import { Primitives } from "@codelytv/primitives-type";

export class McpPromptListResponse {
	constructor(
		public readonly name: string,
		public readonly title: string,
		public readonly description: string,
		public readonly args: object,
	) {}

	static fromPrimitives(prompt: Primitives<McpPromptListResponse>): McpPromptListResponse {
		return new McpPromptListResponse(prompt.name, prompt.title, prompt.description, prompt.args);
	}
}
