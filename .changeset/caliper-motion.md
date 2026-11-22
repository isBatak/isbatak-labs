---
"@isbatak/zag-caliper": minor
"@isbatak/ark-caliper": minor
"@isbatak/panda-caliper": minor
---

Add opt-in motion, made entirely in CSS. A `Frame` with `animate="in"` or `"out"` plays its marks' `enter` and `exit`
variants, timed by `order`, `exitOrder`, `delay`, `duration` and the frame's `stagger`. Pass `time` in seconds to hold
the animations at that moment instead of playing them, for frame-by-frame renderers such as Remotion. `Dimension` and
`Callout` support `enter="draw" | "fade"` and `exit="retract" | "fade"`.
