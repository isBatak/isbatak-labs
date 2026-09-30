# Promos

Promo videos for the tools and components on the site, made with [Remotion](https://www.remotion.dev). One project holds
every video: each promo lives in its own folder under `src` and registers its compositions in `src/Root.tsx`.

```
audio
├── synth.ts        tiny synth shared by all promos: tones, plucks, noise, filters, WAV writer
└── sourcery.ts     the Sourcery score, timed from its theme
brand
└── sourcery.ts     writes the Sourcery logo and wordmark SVGs for the site and the npm README
src
├── Root.tsx        registers every promo's compositions
├── fonts.ts        fonts shared by all promos
├── raw.d.ts        types for `?raw` source imports
└── sourcery/
    ├── brand/          the pixel hat and ANSI Shadow wordmark, shared by the video and the SVG files
    ├── theme.ts        segment lengths and the beats inside each segment
    ├── timeline.ts     when each layer is on screen, derived from theme.ts
    ├── Promo.tsx       stacks the layers as named sequences, plus the audio layers
    ├── layers/         one file per segment: hook, hunt, open, jumps, editors, panda, config, swarm, outro
    └── stage/, site/   building blocks: camera, cursor, keys, overlay, editor, the mock site
```

## Timing

Every segment has a length in `SEGMENT_LENGTHS` (`src/sourcery/theme.ts`) and every beat inside it is an offset from the
segment start. Change a segment's length or a beat and everything after it moves with it: the camera, the layers and the
audio. In the studio each segment is its own sequence on the timeline.

## Audio

`pnpm --filter @isbatak/promos audio` writes three music tracks and one effects track to `public/sourcery/` (all
gitignored): `music-tech-launch.wav`, `music-playful-indie.wav`, `music-tech-noir.wav` and `sfx.wav`. They are generated
from the same timings as the picture, so every click, key press and whoosh lands on its frame. The studio and render
scripts regenerate them first. Each music track is its own sequence in `Promo.tsx`; keep one visible in the studio
timeline and hide the others. Their volumes are `MUSIC_VOLUME` and `EFFECTS_VOLUME` in `Promo.tsx`.

```sh
pnpm --filter @isbatak/promos studio                    # live preview of every promo
pnpm --filter @isbatak/promos audio                     # regenerate the music and sound effects
pnpm --filter @isbatak/promos brand                     # regenerate the logo and wordmark SVGs
pnpm --filter @isbatak/promos render:sourcery           # writes apps/www/public/videos/sourcery-demo.mp4
pnpm --filter @isbatak/promos render:sourcery-vertical  # writes out/sourcery-demo-vertical.mp4
pnpm --filter @isbatak/promos still:sourcery            # writes apps/www/public/videos/sourcery-poster.jpg
```

Components come from `@isbatak/react-ui` and are styled with the `@isbatak/panda-ds` design system, so the videos look
like the site. Every script runs `panda` first to generate `styled-system`.

To add a promo, create `src/<name>/` with a `compositions.tsx` that wraps its `<Composition>`s in a
`<Folder name="<name>">`, render it from `src/Root.tsx`, and add `render:<name>` scripts.

Remotion has its own license: free for individuals and companies of up to three people, a company license otherwise. See
[remotion.dev/license](https://www.remotion.dev/license).
