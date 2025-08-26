/* eslint-disable @typescript-eslint/no-explicit-any */
import { Primitives } from "@codelytv/primitives-type";
import { Client } from "@modelcontextprotocol/sdk/client/index";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp";
import { Transport } from "@modelcontextprotocol/sdk/shared/transport";

import { McpPromptGetResponse } from "./prompts/McpPromptGetResponse";
import { McpPromptsListResponse } from "./prompts/McpPromptsListResponse";
import { McpResourceTemplatesListResponse } from "./resource-templates/McpResourceTemplatesListResponse";
import { McpResourcesListResponse } from "./resources/McpResourcesListResponse";
import { McpResourcesReadResponse } from "./resources/McpResourcesReadResponse";
import { McpToolCallResponse } from "./tools/McpToolCallResponse";
import { McpToolsListResponse } from "./tools/McpToolsListResponse";

export class McpClient {
	private readonly client: Client;
	private readonly transport: Transport;

	constructor(
		transport: "stdio" | "http",
		private readonly args: string[],
	) {
		this.client = new Client(
			{
				name: "mcp-client",
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

	async listTools(): Promise<McpToolsListResponse> {
		const response = await this.client.listTools();

		return McpToolsListResponse.fromPrimitives(response as Primitives<McpToolsListResponse>);
	}

	async listResources(): Promise<McpResourcesListResponse> {
		const response = await this.client.listResources();

		return McpResourcesListResponse.fromPrimitives(
			response as Primitives<McpResourcesListResponse>,
		);
	}

	async listResourceTemplates(): Promise<McpResourceTemplatesListResponse> {
		const response = await this.client.listResourceTemplates();

		return McpResourceTemplatesListResponse.fromPrimitives(
			response as Primitives<McpResourceTemplatesListResponse>,
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

	async readResource(uri: string): Promise<McpResourcesReadResponse> {
		const response = await this.client.readResource({ uri });

		return McpResourcesReadResponse.fromPrimitives(
			response as Primitives<McpResourcesReadResponse>,
		);
	}

	async callTool(name: string, args: Record<string, unknown> = {}): Promise<McpToolCallResponse> {
		const response = await this.client.callTool({
			name,
			arguments: args,
		});

		return McpToolCallResponse.fromPrimitives(response as Primitives<McpToolCallResponse>);
	}

	async listPrompts(): Promise<McpPromptsListResponse> {
		const response = await this.client.listPrompts();

		return McpPromptsListResponse.fromPrimitives({
			prompts: response.prompts.map((prompt: any) => ({
				name: prompt.name,
				title: prompt.title ?? "",
				description: prompt.description ?? "",
				args: prompt.arguments ?? {},
			})),
		});
	}

	async getPrompt(name: string, args: Record<string, unknown> = {}): Promise<McpPromptGetResponse> {
		const response = await this.client.getPrompt({
			name,
			arguments: Object.fromEntries(
				Object.entries(args).map(([key, value]) => [key, String(value)]),
			),
		});

		return McpPromptGetResponse.fromPrimitives({
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
