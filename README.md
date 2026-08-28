# Catalog Service

Internal service exposing a product catalog.

## Development

```bash
npm install
npm test
```

## Architecture

The codebase is organized in two layers:

- `src/core/` — domain logic, no external dependencies
- `src/providers/` — adapters to external systems

See `docs/architecture.md` for the rules governing dependencies between layers.
