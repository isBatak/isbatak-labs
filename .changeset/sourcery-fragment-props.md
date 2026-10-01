---
"@isbatak/sourcery": patch
---

Stop tagging components that are `Fragment` at runtime: skip destructured defaults like `{ RowProvider = Fragment }`, and guard components bound from params or destructuring so the attribute is only added when they are not `Fragment`.
