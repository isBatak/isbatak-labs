---
"@isbatak/panda-ds": patch
---

Avatar recipe: add a `ring` variant, size the fallback icon with the avatar, and scale the `rounded` radius with the
size (from tl-ds). The avatar and group recipes now list `AvatarGroup` in `jsx`, so Panda extracts the variants passed
to it.
