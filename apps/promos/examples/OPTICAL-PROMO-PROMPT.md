# Prompt: optical alignment promo video

Paste everything below the line into a fresh session.

---

Use the `promo-video` skill to build a short Remotion video in `apps/promos/src/optical/` that animates the blog's
optical alignment figure ([optical-alignment.tsx](../apps/www/components/blog/figures/optical-alignment.tsx)). Match its
pacing and layout, but draw everything with our own parts: `@isbatak/react-ui` Button, StartIcon, Badge and
SegmentGroup, the Boring Icons `plus`, and Caliper for every guide. Nothing in the frame is a hand-drawn line or a
screenshot.

## What the reference does

12.6 s at 60 fps, 4:3 (2560×1920), light gray background, one scene, no cuts. A "+ New project" outline button sits
magnified about 6× in the upper middle. An Equal | Optical segmented control sits small below it, with a mouse cursor
parked next to it.

| Time       | What happens                                                                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.0–1.0 s  | Button alone. Equal selected.                                                                                                                                                             |
| 1.0–1.5 s  | Two gray top dimensions fade in: "16px to the box" from the left border to the icon box, and from the label's end to the right border. Dashed extension lines reach down into the button. |
| 2.0 s      | Dashed outline around the icon box, red hatch over the empty strip on the icon's left.                                                                                                    |
| 2.5 s      | Red pill to the left of the button: "3px empty inside the icon".                                                                                                                          |
| 3.0 s      | Two red bottom dimensions: "19px to the ink" on the left, "16px to the ink" on the right. The mismatch is the point.                                                                      |
| 4.8 s      | Cursor clicks Optical. The red pill fades out.                                                                                                                                            |
| 4.9–5.5 s  | The icon slides left. Labels count down (16 → 14 → 13 to the box, 19 → 17 → 16 to the ink) and the ink color passes red → purple → blue. The button gets a little narrower.               |
| 5.5–7.8 s  | Hold: "13px to the box" left, "16px to the ink" on both sides, all blue.                                                                                                                  |
| 7.9–8.2 s  | Every guide fades out.                                                                                                                                                                    |
| 8.2–8.8 s  | The button shrinks to about 2× and drops toward the center.                                                                                                                               |
| 8.8–9.4 s  | A second button fades in above it. Small badges label the rows: gray "Equal" on top, blue "Optical" below.                                                                                |
| 9.4–12.6 s | Hold the side-by-side comparison. This is the poster frame.                                                                                                                               |

## Use our real numbers, not the reference's

The md Button's recipe already does this (`packages/panda/ds/src/theme/recipes/button.ts`,
`size.md._iconStart.ms: "-1"`): 16px padding, 20px icon, and the start icon pulled 4px out. The plus glyph starts 4.4px
inside its box (`plusInk = 20 * 5.25 / 24` in the figure). So the labels read:

- Equal: 16px to the box, 20.4px to the ink, 16px to the ink on the right, "4.4px empty inside the icon".
- Optical: 12px to the box, 16.4px to the ink, 16px to the ink.

Reuse the figure's `md` constants and `px()` formatting so the video and the blog agree. If you round, round both places
the same way.

## How to build it

1. **Workspace.** Build in `apps/promos`, next to the `sourcery` and `icons` promos. Add `@isbatak/ark-caliper` and
   `@isbatak/panda-caliper` to its `package.json` (`@isbatak/icons` is already there), add `caliperPreset` to `presets`
   in its `panda.config.ts`, and add `segment-group` to the `include` glob. Bind the Ark parts to the recipe the way www
   does, with `createSlotRecipeContext(caliper)` from this workspace's `styled-system` (copy the shape of
   `apps/www/components/ui/caliper/caliper.tsx`, minus `"use client"` and `Figure`). Load the Boring Icons plus the way
   `src/icons/sprite.tsx` inlines its sprite.

2. **Compositions.** `src/optical/theme.ts` holds `VIDEO` (fps 60, 756 frames, `square` 1920×1440 for the 4:3 cut, plus
   `wide` 1920×1080 and `tall` 1080×1920) and `T`, the beat frames from the table. `compositions.tsx` registers
   `OpticalPromo`, `OpticalPromoWide` and `OpticalPromoVertical` in a `<Folder name="optical">`, rendered from
   `src/Root.tsx`. Add `render:optical` (to `../www/public/videos/optical-demo.mp4`), `render:optical-wide`,
   `render:optical-vertical` and `still:optical` (poster at about frame 660) to `package.json`.

3. **Scene 1, the measured button.** One `Caliper.Frame` with a numeric `magnify` (about 6 wide, smaller on the tall
   cut) and `annotated`, wrapping the button exactly as `NewProjectButton` does. Overlays:
   - `Caliper.Dimension placement="top"` ×2, gray, "… to the box".
   - `Caliper.Outline` on the icon box and `Caliper.Hatch` on the empty strip.
   - `Caliper.Dimension` (bottom, the default) ×2, "… to the ink".
   - The left pill: a `Caliper.Callout` anchored on the hatch with its `CalloutLabel` placed left of the button, or a
     `Caliper.DimensionLabel`-styled label if Callout can't sit there. Check which reads closer to the reference.

   Don't rely on CSS transitions: `apps/promos/panda.config.ts` turns them all off. Drive everything from
   `useCurrentFrame()`:
   - `offset = interpolate(frame, [T.click, T.settled], [0, 4], { easing: Easing.out(Easing.cubic), clamp })`. Feed
     `boxStart = border + padding - offset` into the spans and labels, and set the StartIcon's inline-start margin to
     `-offset` through `style`, so the button and the guides move together. Format the labels from the same number so
     they count down.
   - Red → blue: render the hatch and ink dimensions twice, once `colorPalette="red"` and once `"blue"`, and crossfade
     their opacity over the slide. Never mix hex colors.
   - Fade-ins: wrap each guide group in a `Box` whose `style.opacity` is a `spring` from its beat.

4. **Toggle and cursor.** A controlled `SegmentGroup.Root size="sm"` whose `value` flips to `optical` at `T.click`. The
   cursor is an inline SVG arrow that becomes a hand over the Optical item, with a short press scale on the click frame.
   It's the only hand-drawn thing in the video.

5. **Scene 2, the comparison.** After the guides fade out, scale the magnified frame down to 2× (interpolate `magnify`),
   then fade in an `HStack` per row like `OpticalComparisonFigure`: Badge + `Caliper.Frame magnify={2}` with the Equal
   button above and the Optical one below. Use the reference's badge colors: gray Equal, blue Optical.

6. **Rehearse** as the skill says: render each cut, make a contact sheet, take stills at frames 290, 310, 330 (mid
   slide) and 520, 540 (scale-down), and compare against the reference at the same times. Stay on the background, border
   and radius tokens. Look up every recipe, variant and token with the `panda-ds` MCP before you use it.

7. Run `pnpm typecheck` in `apps/promos` and `pnpm exec oxlint` on the changed files, then `pnpm format`.

## Rules for this repo

- Write each row, overlay and badge inline. Never `.map()` over static data.
- Use style props on the layout components. Use `style={{ … }}` only for frame-driven values (opacity, transform, margin
  offset).
- Semantic tokens only (`bg`, `bg.subtle`, `fg`, `border`, `colorPalette.*`). If a token is missing, stop and ask.
- No code comments.
- Don't commit. Leave the change for review.
