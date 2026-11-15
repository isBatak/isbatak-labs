---
"@isbatak/react-ui": patch
"@isbatak/vue-ui": patch
"@isbatak/solid-ui": patch
"@isbatak/svelte-ui": patch
---

Slider: `Slider.Thumb` sets `data-focus-visible` while the last interaction was the keyboard, so focus rings show for
keyboard navigation and not on click, and `data-under-text` while it overlaps `Slider.Label` or `Slider.ValueText`, so
the field variant dims the handle behind them.
