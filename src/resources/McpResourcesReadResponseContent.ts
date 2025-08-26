import { Primitives } from "@codelytv/primitives-type";

export class McpResourcesReadResponseContent {
	constructor(
		public readonly uri: string,
		public readonly mimeType?: string,
		public readonly text?: string,
		public readonly blob?: string,
	) {}

	static fromPrimitives(
		content: Primitives<McpResourcesReadResponseContent>,
	): McpResourcesReadResponseContent {
		return new McpResourcesReadResponseContent(
			content.uri,
			content.mimeType,
			content.text,
			content.blob,
		);
	}

	toPrimitives(): Primitives<McpResourcesReadResponseContent> {
		return {
			uri: this.uri,
			mimeType: this.mimeType,
			text: this.text,
			blob: this.blob,
		};
	}
}
