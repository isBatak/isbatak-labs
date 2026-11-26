---
"@isbatak/panda-ds": minor
---

`bg` and `bgColor` take `currentBg`, the background of the nearest ancestor that set one, falling back to `bg`. Every
`bg` now also sets `--bg-currentcolor`. The outline tabs and timeline indicators use it to match the surface they sit
on.

Tabs and segment group pull `data-icon-start` and `data-icon-end` icons toward the item's edge at every size, like
button. The folder tabs variant draws the selected tab with `Tabs.Indicator`, so it slides between tabs.
