---
"@isbatak/panda-turbopack": patch
---

Require Next.js 16 or newer, since the Turbopack rules use `condition`, which Next.js added in 16.0. Document that
dynamic values and `cx()` with runtime arguments still use the `styled-system` runtime.
