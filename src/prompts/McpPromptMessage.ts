import { Primitives } from "@codelytv/primitives-type";

export class McpPromptMessage {
	constructor(
		public readonly role: "user" | "assistant",
		public readonly content: { type: string; text: string },
	) {}

	static fromPrimitives(message: Primitives<McpPromptMessage>): McpPromptMessage {
		return new McpPromptMessage(message.role, message.content);
	}

	toPrimitives(): Primitives<McpPromptMessage> {
		return {
			role: this.role,
			content: this.content,
		};
	}
}
