import { Primitives } from "@codelytv/primitives-type";

import { McpTestPromptMessage } from "./McpTestPromptMessage";

export class McpTestPromptGetResponse {
	constructor(public readonly messages: McpTestPromptMessage[]) {}

	static fromPrimitives(
		primitives: Primitives<McpTestPromptGetResponse>,
	): McpTestPromptGetResponse {
		return new McpTestPromptGetResponse(
			primitives.messages.map((message) => McpTestPromptMessage.fromPrimitives(message)),
		);
	}

	toPrimitives(): Primitives<McpTestPromptGetResponse> {
		return {
			messages: this.messages.map((message) => message.toPrimitives()),
		};
	}

	firstPromptText(): string {
		return this.messages[0].content.text;
	}
}
