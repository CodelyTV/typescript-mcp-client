import { Primitives } from "@codelytv/primitives-type";

import { McpTestResourcesReadResponseContent } from "./McpTestResourcesReadResponseContent";

type McpError = {
	code: number;
	message: string;
	data?: unknown;
};

export class McpTestResourcesReadResponse {
	constructor(
		public readonly contents?: McpTestResourcesReadResponseContent[],
		public readonly error?: McpError,
	) {}

	static fromPrimitives(
		primitives: Primitives<McpTestResourcesReadResponse>,
	): McpTestResourcesReadResponse {
		if (primitives.error) {
			return new McpTestResourcesReadResponse(undefined, primitives.error);
		}

		return new McpTestResourcesReadResponse(
			primitives.contents?.map((content) =>
				McpTestResourcesReadResponseContent.fromPrimitives(content),
			),
		);
	}

	static fromError(error: McpError): McpTestResourcesReadResponse {
		return new McpTestResourcesReadResponse(undefined, error);
	}

	toPrimitives(): Primitives<McpTestResourcesReadResponse> {
		if (this.error) {
			return { error: this.error };
		}

		return {
			contents: this.contents?.map((content) => content.toPrimitives()) ?? [],
		};
	}
}
