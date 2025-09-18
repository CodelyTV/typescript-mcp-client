<p align="center">
  <a href="https://codely.com">
    <img alt="Codely logo" src="https://codely.com/logo/codely_logo.svg">
  </a>
</p>

<h1 align="center">
  🔌 MCP Client
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  A TypeScript test client for Model Context Protocol (MCP) servers that provides a convenient way to test MCP functionality in your test suites.
  <br />
  <br />
  Take a look, play and have fun with this.
  <a href="https://github.com/CodelyTV/typescript-mcp-client/stargazers">Stars are welcome 😊</a>
</p>


## Installation

```bash
npm install --save-dev @codelytv/mcp-client
```

## Usage

### Basic Example

```typescript
import { McpClient } from '@codelytv/mcp-client';

const mcpClient = new McpClient("stdio", [
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
const mcpClient = new McpClient("http", ["http://localhost:3000/mcp"]);
```

## API

### McpClient

The main client class for interacting with MCP servers.

#### Constructor

- `new McpClient(transport: "stdio" | "http", args: string[])`

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

## Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

## License

See [LICENSE](LICENSE)
