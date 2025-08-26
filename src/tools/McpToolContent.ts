import { Primitives } from "@codelytv/primitives-type";

export class McpToolContent {
	constructor(
		public readonly type: "text" | "image" | "resource",
		public readonly text?: string,
		public readonly data?: string,
		public readonly mimeType?: string,
		public readonly resource?: {
			uri: string;
			text?: string;
			mimeType?: string;
		},
	) {}

	static fromPrimitives(content: Primitives<McpToolContent>): McpToolContent {
		return new McpToolContent(
			content.type,
			content.text,
			content.data,
			content.mimeType,
			content.resource,
		);
	}

	toPrimitives(): Primitives<McpToolContent> {
		return {
			type: this.type,
			text: this.text,
			data: this.data,
			mimeType: this.mimeType,
			resource: this.resource,
		};
	}
}
