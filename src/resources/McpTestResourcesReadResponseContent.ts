import { Primitives } from "@codelytv/primitives-type";

export class McpTestResourcesReadResponseContent {
	constructor(
		public readonly uri: string,
		public readonly mimeType?: string,
		public readonly text?: string,
		public readonly blob?: string,
	) {}

	static fromPrimitives(
		content: Primitives<McpTestResourcesReadResponseContent>,
	): McpTestResourcesReadResponseContent {
		return new McpTestResourcesReadResponseContent(
			content.uri,
			content.mimeType,
			content.text,
			content.blob,
		);
	}

	toPrimitives(): Primitives<McpTestResourcesReadResponseContent> {
		return {
			uri: this.uri,
			mimeType: this.mimeType,
			text: this.text,
			blob: this.blob,
		};
	}
}
