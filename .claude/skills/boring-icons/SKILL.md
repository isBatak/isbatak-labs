---
name: boring-icons
description: Draw SVG icons in the Boring Icons style. Use when drawing an icon Boring Icons doesn't have, adding one to a Boring-based icon set, or restyling a third-party icon to match it.
---

# Boring Icons

[Boring Icons](https://www.npmjs.com/package/@boring-icons/react) is a set of plain, geometric line icons. A new icon
has to look like it was drawn by the same hand: the same grid, weight, corners and amount of detail.

The scripts next to this file render Boring's own icons as references. Run them from a folder where
`@boring-icons/react`, `react`, `react-dom` and `playwright` (or `@playwright/test`) resolve, or pass
`--sprite <file>` to take references from an SVG sprite instead.

## Steps

1. **Check the name.** List Boring's icons with `node <skill dir>/reference.mjs --list` and check your project's own
   set. Look for an icon that already covers the meaning under any name (`close`, not `x`; `external-link`, not
   `arrow-up-right`). Done when you've found one, or picked a free kebab-case name in Boring's vocabulary (`-filled`
   for filled variants, `-circle` for circled ones, `-duotone` for duotone ones).
2. **Find the nearest Boring icons.** Pick two or three whose shape or subject is closest and print their paths:
   `node <skill dir>/reference.mjs folder file`. Reuse their geometry outright where the subject overlaps; `folder`,
   `file`, `message`, `search`, `settings` (a hexagon) and `calendar` are the frames most worth borrowing.
3. **Draw** to the style below, in the file shape below.
4. **Preview** it next to those references:

   ```sh
   node <skill dir>/preview.mjs path/to/icon.svg --ref folder,file
   ```

   It prints the path of a PNG with each icon at 96, 24 and 16px on light and dark. Read it. Done when, at 24px, the
   icon has the same weight, size and corner treatment as the references, every counter and gap is still open, and
   nothing touches. Redraw and preview again until it is.

## Style

Few strokes, straight lines, square corners.

- **Grid and stroke.** `viewBox="0 0 24 24"`, stroke width 1.5, round caps and round joins, no fill. Draw in black;
  the sprite tooling handles color.
  Coordinates are integers (89% of Boring's), sometimes halves.
- **Live area.** Square frames sit on 4–20, wide frames on 3–21 (`mail`), circles are r=9 on 3–21. Small glyphs sit
  inside, centered: `plus` 6–18, `close` 7–17, `chevron-right` 10–15 by 7–17. Nothing goes past 2–22.
- **Square corners.** Frames are sharp rectangles (`M4 4h16v16H4z`); the round join is the only softening. Use no
  `rx` and no rounded-corner arcs.
- **Straight lines and 45°.** Half the set uses only straight segments. Diagonals run at 45° (`m7 7 10 10`), arrow and
  chevron heads are 5 units on each arm (`m14 17 5-5-5-5`).
- **Curves only where the subject is round.** Circles and rings use arcs with whole radii: 9 for a full circle, 3 for a
  ring or small circle, 2, and 1 for a dot (`dots` is three stroked r=1 circles). Béziers are for organic shapes only:
  heart, pin, phone, eye.
- **Minimal detail.** Draw the silhouette and one or two inner marks, no more (`calendar` is a box, a rule, two
  posts and one 2×2 square). Inner marks keep at least 2 units of clear space from the outline.
- **Gaps are part of the language.** Outlines can break on purpose to make room or add rhythm: `clock` is a square
  broken at its midpoints. When a badge or mark overlaps a frame, end the frame 2.5 units before it instead of
  crossing it.
- **Fill only `-filled` and `-duotone` variants** (`heart-filled`, `star-filled`).

### Duotone variants

A `-duotone` icon is the outline icon unchanged, with one tinted layer under it:

- The tint is a closed path filled black at `opacity="0.2"`, with no stroke, placed before the outline so it sits
  underneath.
- It fills the main body only (the inside of the folder, the face of the clock), using the outline's own coordinates.
  Small marks, posts and arrows stay untinted.
- Rhythm gaps (`clock`'s broken square) don't affect it: the tint fills the whole body. Where the outline breaks to
  make room for a badge, the tint stops short of the badge too.

```svg
<path d="M4 5h6l2 3h8v11H4z" fill="black" stroke="none" opacity="0.2"/>
<path d="M4 5h6l2 3h8v11H4z"/>
```

### Badges and monograms

For an icon that carries letters (an "AI" badge, a currency code): the letters sit inside the shape, or as a badge in
the bottom right, 6 units tall and flush with the frame's right and bottom edges. The frame stops 2.5 units short of
the badge. Letters are strokes on the same grid; a triangular A needs at least 6 units of height for its counter to
stay open at 24px.

### Restyling a third-party icon

Icons from sets on the same 24 grid (Tabler, Lucide) keep their paths and change only the stroke width to 1.5. Square
off rounded-rectangle frames where they would stand out next to Boring's.

## File shape

Put the presentation attributes on a `<g>`, not the root `<svg>`. Sprite builders such as ikona strip them from the
root when they turn the file into a `<symbol>`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 8h16v11H4z"/>
  </g>
</svg>
```
