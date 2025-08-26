import { Primitives } from "@codelytv/primitives-type";

import { McpResourcesReadResponseContent } from "./McpResourcesReadResponseContent";

type McpError = {
	code: number;
	message: string;
	data?: unknown;
};

export class McpResourcesReadResponse {
	constructor(
		public readonly contents?: McpResourcesReadResponseContent[],
		public readonly error?: McpError,
	) {}

	static fromPrimitives(
		primitives: Primitives<McpResourcesReadResponse>,
	): McpResourcesReadResponse {
		if (primitives.error) {
			return new McpResourcesReadResponse(undefined, primitives.error);
		}

		return new McpResourcesReadResponse(
			primitives.contents?.map((content) =>
				McpResourcesReadResponseContent.fromPrimitives(content),
			),
		);
	}

	static fromError(error: McpError): McpResourcesReadResponse {
		return new McpResourcesReadResponse(undefined, error);
	}

	toPrimitives(): Primitives<McpResourcesReadResponse> {
		if (this.error) {
			return { error: this.error };
		}

		return {
			contents: this.contents?.map((content) => content.toPrimitives()) ?? [],
		};
	}
}
