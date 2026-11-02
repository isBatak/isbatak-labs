---
"@isbatak/panda-ds": patch
---

Fix the `searchInput` recipe so the input makes room for the search icon. Its selector used `data-scope` and
`data-part`, which the search input doesn't render. The search icon is also one step larger at every size.
