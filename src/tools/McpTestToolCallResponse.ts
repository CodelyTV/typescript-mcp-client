import { Primitives } from "@codelytv/primitives-type";

import { McpTestToolContent } from "./McpTestToolContent";

export class McpTestToolCallResponse {
	constructor(
		public readonly content: McpTestToolContent[],
		public readonly structuredContent?: Record<string, unknown>,
		public readonly isError?: boolean,
	) {}

	static fromPrimitives(primitives: Primitives<McpTestToolCallResponse>): McpTestToolCallResponse {
		return new McpTestToolCallResponse(
			primitives.content.map((content) => McpTestToolContent.fromPrimitives(content)),
			primitives.structuredContent,
			primitives.isError,
		);
	}

	toPrimitives(): Primitives<McpTestToolCallResponse> {
		return {
			content: this.content.map((content) => content.toPrimitives()),
			structuredContent: this.structuredContent,
			isError: this.isError,
		};
	}
}
