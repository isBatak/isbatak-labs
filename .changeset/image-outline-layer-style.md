---
"@isbatak/panda-ds": minor
---

Add the `imageOutline` layer style: a faint 1px inset outline for images and avatars, black in light mode and white in
dark mode. Set `--image-outline-opacity` (0–1, default 0.1) to change its strength. The `avatar` recipe's `image` slot
uses it by default, and so does the new `image` recipe.
