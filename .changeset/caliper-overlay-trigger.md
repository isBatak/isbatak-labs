---
"@isbatak/zag-caliper": minor
"@isbatak/ark-caliper": minor
"@isbatak/panda-caliper": minor
---

Add `OverlayTrigger`, an unstyled toggle button that shows and hides every mark in its `Root`. `Root` takes `overlay`,
`defaultOverlay` and `onOverlayChange`, and sets `data-overlay="visible" | "hidden"`. The recipe fades outlines,
hatches, dimensions, callouts, icon grids and legends out while it's hidden, and pins the trigger to the canvas's
top-right corner. Style the trigger by putting your own button inside it with `asChild`. Once the overlay has changed,
the root's frames animate in and out with it, so dimensions draw and retract; a dimension without `enter` or `exit` uses
`draw` and `retract`. A frame's own `animate` still wins, and nothing animates on first render.
