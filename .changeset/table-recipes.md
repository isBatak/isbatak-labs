---
"@isbatak/panda-ds": minor
---

Rebuild the `table` recipe and add a `grid-table` recipe, both modeled on the tl-ds tables. They share the variants
`size` (`sm`, `md`, `lg`), `showRowBorder`, `showColumnBorder`, `interactive`, `stickyHeader` and `highlightedHeader`,
and support sticky start and end columns through `data-sticky`. The `table` recipe drops its `variant` (`line`,
`outline`) and `striped` variants.

`--toc-indent` on the `toc` recipe is now a spacing token, `spacing.2.5`, and takes any length.
