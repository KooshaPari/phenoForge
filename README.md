# phenotype-forge — CLI Task Runner and Build Orchestrator

> **Classification:** Special-purpose tool / product
> **Prefix policy:** Keep `phenotype-` — tool brand, not a library
> **Phase 6 status:** Keep as-is; standalone CLI product, not a library extraction candidate

## What This Is

A **standalone CLI tool** for task running and build orchestration. `phenotype-forge` defines tasks in Rust and executes them in parallel with dependency graph resolution, hot reload, and a plugin system.

## Features

- **Parallel Execution**: Run tasks concurrently with automatic topological sort
- **Dependency Graph**: Automatic resolution of task dependencies
- **Hot Reload**: Watch files and restart on changes
- **Plugin System**: Extend with custom task definitions

## Installation

```bash
cargo install forge-cli
```

## Quick Start

```rust,ignore
use forge::{task, deps};

#[task]
fn build() {
    println!("Building...");
}

#[task]
#[deps(build)]
fn test() {
    println!("Testing...");
}

#[task]
fn serve() {
    println!("Serving...");
}
```

Run:
```bash
forge test    # Builds first, then tests
forge --watch # Hot reload
```

## Why Keep the `phenotype-` Prefix

`phenotype-forge` is a **brand-named tool**, not a reusable library. The prefix serves as a namespace/branding rather than indicating a generic library. Similar to how `rustc` has a `rust-` namespace.

## Relationship to Other Tools

| Tool | Type | Purpose |
|------|------|---------|
| `phenotype-forge` | CLI tool | Task runner / build orchestrator |
| `worktree-manager` | CLI tool | Git worktree automation |
| `phenoctl` | CLI tool | Phenotype config/feature flag management |

## License

MIT
