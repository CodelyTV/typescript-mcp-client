import { Primitives } from "@codelytv/primitives-type";

import { McpToolContent } from "./McpToolContent";

export class McpToolCallResponse {
	constructor(
		public readonly content: McpToolContent[],
		public readonly structuredContent?: Record<string, unknown>,
		public readonly isError?: boolean,
	) {}

	static fromPrimitives(primitives: Primitives<McpToolCallResponse>): McpToolCallResponse {
		return new McpToolCallResponse(
			primitives.content.map((content) => McpToolContent.fromPrimitives(content)),
			primitives.structuredContent,
			primitives.isError,
		);
	}

	toPrimitives(): Primitives<McpToolCallResponse> {
		return {
			content: this.content.map((content) => content.toPrimitives()),
			structuredContent: this.structuredContent,
			isError: this.isError,
		};
	}
}
