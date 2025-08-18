import { Primitives } from "@codelytv/primitives-type";

export class McpTestPromptMessage {
	constructor(
		public readonly role: "user" | "assistant",
		public readonly content: { type: string; text: string },
	) {}

	static fromPrimitives(message: Primitives<McpTestPromptMessage>): McpTestPromptMessage {
		return new McpTestPromptMessage(message.role, message.content);
	}

	toPrimitives(): Primitives<McpTestPromptMessage> {
		return {
			role: this.role,
			content: this.content,
		};
	}
}
