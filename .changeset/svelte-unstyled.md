---
"@isbatak/svelte-ui": minor
---

Recipe-styled parts take `unstyled`, which drops their recipe class and keeps any `class` you pass, matching React, Vue
and Solid. Root components that render no element of their own (Popover, Menu, Tooltip, HoverCard, Tour) don't take it,
as in the other frameworks.
