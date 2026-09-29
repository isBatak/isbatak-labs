---
"@isbatak/sourcery": patch
---

Fall back to `localhost` when a Content Security Policy blocks `127.0.0.1`, skip tags that alias `Fragment`, and strip
sourcery's attributes from props spread onto a `Fragment`
