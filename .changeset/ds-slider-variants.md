---
"@isbatak/panda-ds": minor
---

Slider: replace the `outline` and `solid` variants with `capsule` (thin track, wide pill thumb, soft keyboard focus
ring; the new default) and `field` (label and value inside a tall track, horizontal or vertical, with a handle, ticks
and mark labels shown on hover, focus or drag; in a range, each handle sits inside its own end of the fill). Thumbs and
markers render before hydration, the vertical layout keeps markers on the track, and markers no longer paint over a
focused thumb.
