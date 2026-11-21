# Promo video

Promo videos made with [Remotion](https://www.remotion.dev), styled with Panda CSS and the `@isbatak/panda-ds` design
system. Components come from `@isbatak/react-ui`, so frames look like the site. Every script runs `panda` first to
generate `styled-system`.

```
src
├── Root.tsx        registers every video's compositions
├── fonts.ts        Inter and JetBrains Mono
└── intro/
    ├── theme.ts          fps, duration and sizes
    ├── compositions.tsx  wide and vertical compositions in a <Folder>
    └── Intro.tsx         the starter scene
```

```sh
pnpm --filter @isbatak/promo-video studio        # live preview
pnpm --filter @isbatak/promo-video render:intro  # writes out/intro.mp4
pnpm --filter @isbatak/promo-video still:intro   # writes out/intro.jpg
```

To add a video, create `src/<name>/` with a `compositions.tsx` that wraps its `<Composition>`s in a
`<Folder name="<name>">`, render it from `src/Root.tsx`, and add `render:<name>` scripts.
