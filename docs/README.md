# FoundryVTT MCP Server Documentation

This directory contains the auto-generated TypeDoc documentation for the FoundryVTT MCP Server.

## 📖 Viewing the Documentation

### Option 1: Browse Files Directly
You can browse the documentation files directly in this directory:

- **[index.html](./index.html)** - Main documentation homepage
- **[modules.html](./modules.html)** - Module overview
- **[classes/](./classes/)** - Class documentation (FoundryClient, etc.)
- **[interfaces/](./interfaces/)** - TypeScript interface documentation
- **[types/](./types/)** - Type definitions

### Option 2: Serve Locally
To view the documentation with proper styling and navigation:

```bash
# From the project root directory
npm run docs:serve
```

This will generate fresh documentation and serve it locally at `http://localhost:8080`.

### Option 3: GitHub Pages (if enabled)
If GitHub Pages is configured for this repository, the documentation will be available at:
```
https://[username].github.io/[repository-name]/
```

## 🔄 Auto-Generation

This documentation is automatically generated from TypeScript source code and JSDoc comments using [TypeDoc](https://typedoc.org/).

**Regeneration triggers:**
- Pushes to the main branch that modify source code
- Changes to `README.md`, `typedoc.json`, or `package.json`
- Manual workflow dispatch

## 📚 What's Documented

- **FoundryClient class** - Main client for FoundryVTT API communication
- **TypeScript interfaces** - All data structures and type definitions
- **Configuration management** - Environment variable handling and validation
- **Utility functions** - Logging and helper functions
- **Usage examples** - Code samples for common operations

## 🔧 Regenerating Manually

To regenerate the documentation locally:

```bash
# Generate documentation
npm run docs

# Or generate and serve
npm run docs:serve
```

---

*Auto-generated documentation - last updated by GitHub Action*