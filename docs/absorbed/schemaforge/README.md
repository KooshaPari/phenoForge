# Schemaforge (Absorbed)

> **Status**: Absorbed into phenoForge as planned feature

The Schemaforge project has been merged into phenoForge's roadmap. Its specification and PRD are preserved here for reference.

## Original Description

Type-safe code generation from schemas (schema-first code generation tool "craft")

## Absorbed Documentation

- [SPEC.md](./SPEC.md) - Original specification
- [PRD.md](./PRD.md) - Product requirements document

## Integration Notes

The "craft" tool described in the PRD should be implemented as a module within phenoForge's code generation capabilities.

### Key Features to Implement

1. Schema language (YAML/JSON) with entity, relationship, and enum definitions
2. Multi-language code generators (Rust, TypeScript, Go, SQL, OpenAPI)
3. CLI with generate, watch, validate, and diff commands
4. Handlebars-based template system
5. Plugin system for custom generators

