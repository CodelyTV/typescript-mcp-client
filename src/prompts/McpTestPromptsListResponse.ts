import { Primitives } from "@codelytv/primitives-type";

import { McpTestPromptListResponse } from "./McpTestPromptListResponse";

export class McpTestPromptsListResponse {
	constructor(public readonly prompts: McpTestPromptListResponse[]) {}

	static fromPrimitives(
		primitives: Primitives<McpTestPromptsListResponse>,
	): McpTestPromptsListResponse {
		return new McpTestPromptsListResponse(
			primitives.prompts.map((prompt) => McpTestPromptListResponse.fromPrimitives(prompt)),
		);
	}

	names(): string[] {
		return this.prompts.map((prompt) => prompt.name);
	}
}
