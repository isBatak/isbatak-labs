---
"@isbatak/panda-ds": minor
"@isbatak/react-ui": minor
"@isbatak/vue-ui": minor
"@isbatak/svelte-ui": minor
"@isbatak/solid-ui": minor
---

Buttons: Button gets an `orientation` variant, where `vertical` puts the icon above a short label. New Toggle, Clipboard
(with a `clipboard` slot recipe) and DownloadTrigger. Field's root, label and orientation styles are shared with
Clipboard.

`StartIcon` and `EndIcon`, exported from each framework's `icon` module, replace `ButtonStartIcon`, `ButtonEndIcon`,
`BadgeStartIcon` and `BadgeEndIcon`. They take `asChild`, and a loading Button's spinner is marked the same way when it
sits next to text.
