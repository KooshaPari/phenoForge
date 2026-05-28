//! Phenotype Forge - High-Performance CLI Task Runner
//!
//! # Status
//! This is a documentation-only crate. The actual implementation is planned
//! but not yet written. See SPEC.md for full specification.
//!
//! # Quick Example
//! ```ignore
//! use forge::{task, deps, Forge};
//!
//! #[task]
//! fn build() { /* ... */ }
//! ```
//!
//! See README.md for complete documentation.

#![doc(hidden)]

pub mod core {
    //! Core functionality (placeholder)
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
