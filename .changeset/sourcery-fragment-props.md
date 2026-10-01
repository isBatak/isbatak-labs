---
"@isbatak/sourcery": patch
---

Stop tagging components that are `Fragment` at runtime: skip destructured defaults like `{ RowProvider = Fragment }`,
and guard components taken from params, destructuring, props or hooks so the attribute is only added when they are not
`Fragment`.
