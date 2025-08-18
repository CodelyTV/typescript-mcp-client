# @codelytv/mcp-test-client

A TypeScript test client for Model Context Protocol (MCP) servers that provides a convenient way to test MCP functionality in your test suites.

## Installation

```bash
npm install --save-dev @codelytv/mcp-test-client
```

## Usage

### Basic Example

```typescript
import { McpTestClient } from '@codelytv/mcp-test-client';

const mcpClient = new McpTestClient("stdio", [
  "npx",
  "ts-node",
  "./src/app/mcp/server.ts",
]);

await mcpClient.connect();

// List available tools
const tools = await mcpClient.listTools();
console.log('Available tools:', tools.names());

// Call a tool
const response = await mcpClient.callTool('search-course-by-id', { id: 'course-123' });

// List resources
const resources = await mcpClient.listResources();
console.log('Available resources:', resources.uris());

// Read a resource
const resource = await mcpClient.readResource('courses://all');

await mcpClient.disconnect();
```

### HTTP Transport

```typescript
const mcpClient = new McpTestClient("http", ["http://localhost:3000/mcp"]);
```

## API

### McpTestClient

The main client class for interacting with MCP servers.

#### Constructor

- `new McpTestClient(transport: "stdio" | "http", args: string[])`

#### Methods

- `connect()` - Connect to the MCP server
- `disconnect()` - Disconnect from the MCP server
- `listTools()` - List available tools
- `callTool(name: string, args?: Record<string, unknown>)` - Call a tool
- `listResources()` - List available resources
- `readResource(uri: string)` - Read a resource
- `listResourceTemplates()` - List resource templates
- `completeResourceTemplateParam(uri: string, paramName: string, textToComplete: string)` - Complete resource template parameters
- `listPrompts()` - List available prompts
- `getPrompt(name: string, args?: Record<string, unknown>)` - Get a prompt

## License

MIT