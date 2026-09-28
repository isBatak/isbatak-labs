# Sourcery promo

The demo video on the [Sourcery docs page](../../www/content/tools/sourcery/index.mdx), made with
[Remotion](https://www.remotion.dev).

```sh
pnpm --filter @isbatak/promo-sourcery studio   # edit with a live preview
pnpm --filter @isbatak/promo-sourcery render   # writes apps/www/public/videos/sourcery-demo.mp4
pnpm --filter @isbatak/promo-sourcery still    # writes out/poster.png from frame 150
```

The composition is `SourceryPromo` in `src/Root.tsx`, 1920×1080 at 30 fps. It plays three scenes in `src/scenes`:
`Intro`, `Demo` (the hover, click and jump to the editor) and `Outro`. Their lengths live in `src/theme.ts` next to the
colors.

After rendering, set `video: /videos/sourcery-demo.mp4` in the docs page frontmatter so the Demo section plays it.

Remotion has its own license: free for individuals and companies of up to three people, a company license otherwise. See
[remotion.dev/license](https://www.remotion.dev/license).
