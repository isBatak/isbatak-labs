---
"@isbatak/panda-ds": minor
---

Style the `drawer` recipe from Zag.js 2's `data-swipe-direction`, so a drawer built on Zag or Ark directly gets the
right edge, radius, animation and stacking offset without setting `placement`. `placement` still works and overrides the
attribute, which keeps responsive placements working, but it no longer has a recipe default.

The content now has an `::after` that fills the gap behind the drawer when it is dragged past its open position. Its
size comes from `--drawer-bleed`, and `float` drawers hide it.

Adds `swipeArea`, `indent` and `indentBackground` slots.
