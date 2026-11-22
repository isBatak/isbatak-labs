---
"@isbatak/panda-ds": minor
"@isbatak/panda-theme-analog": patch
---

Add the `iconPullStart`, `iconPullEnd` and `iconPullOffset` utilities. `iconPullStart` and `iconPullEnd` take a spacing
token and pull an icon toward its edge by that amount plus `--icon-offset`; `iconPullOffset` sets `--icon-offset`, which
`StartIcon` and `EndIcon` also set from their `offset`. Button, Badge, Timer and Kbd pull their icons with them, so a
single icon can be pulled to its ink. Kbd now lays out `StartIcon` and `EndIcon` with a small gap.
