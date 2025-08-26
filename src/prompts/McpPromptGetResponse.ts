import { Primitives } from "@codelytv/primitives-type";

import { McpPromptMessage } from "./McpPromptMessage";

export class McpPromptGetResponse {
	constructor(public readonly messages: McpPromptMessage[]) {}

	static fromPrimitives(primitives: Primitives<McpPromptGetResponse>): McpPromptGetResponse {
		return new McpPromptGetResponse(
			primitives.messages.map((message) => McpPromptMessage.fromPrimitives(message)),
		);
	}

	toPrimitives(): Primitives<McpPromptGetResponse> {
		return {
			messages: this.messages.map((message) => message.toPrimitives()),
		};
	}

	firstPromptText(): string {
		return this.messages[0].content.text;
	}
}
