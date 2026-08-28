# Architecture

## Layers

| Layer | Role |
|---|---|
| `src/core/` | Domain logic. Must not depend on any provider. |
| `src/providers/` | Adapters to external systems. May depend on core. |

## Rules

1. `src/core/**` MUST NOT import from `src/providers/**`, statically or dynamically.
2. `src/providers/**` MAY import from `src/core/**`.
