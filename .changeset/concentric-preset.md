---
"@isbatak/panda-concentric-preset": minor
---

Add the concentric preset: `rounded="concentric"` (and every other radius prop) sets a child's radius to its rounded
parent's radius minus the gap between them. The gap is measured in CSS from the padding, border, margin and inset style
props, through chains of concentric elements and plain wrappers. Adds `concentricGap`, `concentricElliptical`,
`concentricSquircle` and `concentricFloor` utilities.
