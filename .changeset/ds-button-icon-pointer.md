---
"@isbatak/panda-ds": patch
---

Icons inside a button no longer take pointer events, so the click always lands on the button. In Solid, a click on the
icon of a drawer's close button used to be read as the start of a drag and didn't close the drawer.
