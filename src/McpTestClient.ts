/* eslint-disable @typescript-eslint/no-explicit-any */
import { Primitives } from "@codelytv/primitives-type";
import { Client } from "@modelcontextprotocol/sdk/client/index";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp";
import { Transport } from "@modelcontextprotocol/sdk/shared/transport";

import { McpTestPromptGetResponse } from "./prompts/McpTestPromptGetResponse";
import { McpTestPromptsListResponse } from "./prompts/McpTestPromptsListResponse";
import { McpTestResourceTemplatesListResponse } from "./resource-templates/McpTestResourceTemplatesListResponse";
import { McpTestResourcesListResponse } from "./resources/McpTestResourcesListResponse";
import { McpTestResourcesReadResponse } from "./resources/McpTestResourcesReadResponse";
import { McpTestToolCallResponse } from "./tools/McpTestToolCallResponse";
import { McpTestToolsListResponse } from "./tools/McpTestToolsListResponse";

export class McpTestClient {
	private readonly client: Client;
	private readonly transport: Transport;

	constructor(
		transport: "stdio" | "http",
		private readonly args: string[],
	) {
		this.client = new Client(
			{
				name: "mcp-test-client",
				version: "1.0.0",
			},
			{
				capabilities: {
					resources: {},
					tools: {},
					prompts: {},
				},
			},
		);

		if (transport === "stdio") {
			this.transport = new StdioClientTransport({
				command: this.args[0],
				args: this.args.slice(1),
			});
		} else {
			this.transport = new StreamableHTTPClientTransport(new URL(this.args[0]));
		}
	}

	async connect(): Promise<void> {
		await this.client.connect(this.transport);
	}

	async disconnect(): Promise<void> {
		await this.client.close();
	}

	async listTools(): Promise<McpTestToolsListResponse> {
		const response = await this.client.listTools();

		return McpTestToolsListResponse.fromPrimitives(
			response as Primitives<McpTestToolsListResponse>,
		);
	}

	async listResources(): Promise<McpTestResourcesListResponse> {
		const response = await this.client.listResources();

		return McpTestResourcesListResponse.fromPrimitives(
			response as Primitives<McpTestResourcesListResponse>,
		);
	}

	async listResourceTemplates(): Promise<McpTestResourceTemplatesListResponse> {
		const response = await this.client.listResourceTemplates();

		return McpTestResourceTemplatesListResponse.fromPrimitives(
			response as Primitives<McpTestResourceTemplatesListResponse>,
		);
	}

	async completeResourceTemplateParam(
		uri: string,
		paramName: string,
		textToComplete: string,
	): Promise<string[]> {
		const response = await this.client.complete({
			ref: {
				type: `ref/resource`,
				uri,
			},
			argument: {
				name: paramName,
				value: textToComplete,
			},
		});

		return response.completion.values;
	}

	async readResource(uri: string): Promise<McpTestResourcesReadResponse> {
		const response = await this.client.readResource({ uri });

		return McpTestResourcesReadResponse.fromPrimitives(
			response as Primitives<McpTestResourcesReadResponse>,
		);
	}

	async callTool(
		name: string,
		args: Record<string, unknown> = {},
	): Promise<McpTestToolCallResponse> {
		const response = await this.client.callTool({
			name,
			arguments: args,
		});

		return McpTestToolCallResponse.fromPrimitives(response as Primitives<McpTestToolCallResponse>);
	}

	async listPrompts(): Promise<McpTestPromptsListResponse> {
		const response = await this.client.listPrompts();

		return McpTestPromptsListResponse.fromPrimitives({
			prompts: response.prompts.map((prompt: any) => ({
				name: prompt.name,
				title: prompt.title ?? "",
				description: prompt.description ?? "",
				args: prompt.arguments ?? {},
			})),
		});
	}

	async getPrompt(
		name: string,
		args: Record<string, unknown> = {},
	): Promise<McpTestPromptGetResponse> {
		const response = await this.client.getPrompt({
			name,
			arguments: Object.fromEntries(
				Object.entries(args).map(([key, value]) => [key, String(value)]),
			),
		});

		return McpTestPromptGetResponse.fromPrimitives({
			messages: response.messages.map((message: any) => ({
				role: message.role,
				content:
					message.content.type === "text"
						? {
								type: message.content.type,
								text: message.content.text,
							}
						: message.content,
			})),
		});
	}
}
