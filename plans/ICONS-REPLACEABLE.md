# Replaceable icons promo

Promote that any icon set can replace the built-in one and every component follows. Boring Icons by Goran Tomičić stays
the default and gets credit in the video and posts.

## Library

1. [x] `@isbatak/icons` exports `componentIconNames` and `ComponentIconName`: the names components draw (`check`,
       `chevron-down`, `close`, `search`, `view`, `view-off`). `Icon` always accepts them, so a custom `IconRegistry`
       doesn't break the library's own code, and a custom sprite must include them.
1. [x] React `Select` indicators and `CloseButton` in React, Vue, Svelte and Solid render `Icon` instead of inline SVGs.
1. [x] React `PasswordInput` (`lock` start, `view`/`view-off` toggle) and `SearchInput` (`search` start, `close` clear),
       built on `InputGroup`.
1. [x] Docs: list the required names in "Use your own icons", and add the new components to the www ds docs.

## Video (`apps/promos/src/icons`)

1. [x] Sprites for Boring (default), Lucide, Phosphor fill, Material Symbols and Pixelarticons, built with ikona, each
       mapped to the same names.
1. [x] Segments: hook, setup (install, `ikona.config.ts`, `setIconSprite`, `IconRegistry`), components with Boring Icons
       and the author credit, live swaps across the four other sets, frameworks (React, Vue, Svelte, Solid, Preact,
       Lit), outro.
1. [x] Render scripts, plus posts in [ICONS-PROMO.md](./ICONS-PROMO.md) rewritten around the video.
