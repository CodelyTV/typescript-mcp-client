import { Primitives } from "@codelytv/primitives-type";

import { McpPromptListResponse } from "./McpPromptListResponse";

export class McpPromptsListResponse {
	constructor(public readonly prompts: McpPromptListResponse[]) {}

	static fromPrimitives(primitives: Primitives<McpPromptsListResponse>): McpPromptsListResponse {
		return new McpPromptsListResponse(
			primitives.prompts.map((prompt) => McpPromptListResponse.fromPrimitives(prompt)),
		);
	}

	names(): string[] {
		return this.prompts.map((prompt) => prompt.name);
	}
}
