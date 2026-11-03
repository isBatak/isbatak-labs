# Icons promo posts

Posts for the replaceable icons video. Replace `<SITE_URL>` with the production www URL and tag Goran Tomičić on each
platform before posting.

Video: `apps/www/public/videos/icons-demo.mp4` (16:9, 36s) for LinkedIn and X, and
`pnpm --filter promos render:icons-vertical` for Shorts, Reels and TikTok.

Facts used: Boring Icons is the default set (174 icons with the extras). Swapping is `setIconSprite()` plus an
`IconRegistry` augmentation, with the sprite built by [ikona](https://www.npmjs.com/package/@ikona/cli). `Icon` exists
for React, Vue, Svelte, Solid, Preact and Lit; Select, Close Button, Password Input and Search Input draw their icons
from the same sprite, so a custom sprite must include `check`, `chevron-down`, `close`, `lock`, `search`, `view` and
`view-off`.

## LinkedIn

> Your icons, our components. 🔁
>
> Every component in my design system draws its icons from one SVG sprite. Swap the sprite and the whole UI follows: the
> Select chevron, the search and clear icons, the password eye, the close buttons.
>
> In the video the same components run on Boring Icons, Lucide, Phosphor, Material Symbols and Pixelarticons, without
> touching a single component.
>
> How it works:
>
> 1. Put your SVGs in a folder and build a sprite with ikona, which also writes the union of your icon names.
> 2. Call `setIconSprite("/sprite.svg")` once.
> 3. Point `IconRegistry` at your names, so `<Icon name="…" />` only accepts icons you actually have.
>
> The `Icon` component works the same in React, Vue, Svelte, Solid, Preact and Lit.
>
> The default set is Boring Icons, plain geometric line icons designed by Goran Tomičić, free and MIT licensed. If you
> like them, check out his work: https://goran-tomicic.xyz
>
> Docs: <SITE_URL>/ds/icons/setup
>
> #designsystems #icons #react #vue #svelte #webcomponents

## X / Bluesky

Thread, each post under 280 characters. Attach the video to the first one.

1. > Your icons. Our components.
   >
   > Every component in isbatak-labs draws its icons from one SVG sprite, so one line swaps the whole set: Boring Icons
   > → Lucide → Phosphor → Material Symbols → Pixelarticons.
2. > Setup:
   >
   > 1. Build a sprite from your SVG folder with ikona
   > 2. `setIconSprite("/sprite.svg")`
   > 3. Augment `IconRegistry` with ikona's generated names
   >
   > Now `<Icon name="rocket" />` is typed against your own set.
3. > It works in React, Vue, Svelte, Solid and Preact, and as `<ib-icon>` in Lit.
   >
   > Select, Password Input, Search Input and Close Button follow the swap too. Your sprite just needs the 7 names they
   > use.
4. > The default set is Boring Icons by Goran Tomičić: plain, geometric, MIT. https://goran-tomicic.xyz
   >
   > Docs: <SITE_URL>/ds/icons/setup

## Short version

For Shorts, Reels or TikTok captions, or a Discord or Slack share:

> Swap every icon in the UI with one sprite. Built with ikona, works in React, Vue, Svelte, Solid, Preact and Lit.
> Default icons: Boring Icons by Goran Tomičić. <SITE_URL>/ds/icons/setup
