---
"@isbatak/panda-ds": patch
---

Fix the spacing between `line` variant items in `tabs` and `segmentGroup`. The `_notLast` margin was nested inside the
property, which Panda emits as an invalid CSS property, so it never applied.
