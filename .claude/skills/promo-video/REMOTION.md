# Promo videos in apps/promos

## Direction

- **Every motion has a cause.** Content changes by moving (sliding, pushing, popping in place), so the viewer sees what
  turned into what. Groups stagger, beats overlap slightly, and the payoff holds long enough to read every word on
  screen. Between beats, something is always moving toward the next one.
- **One thing leads.** The focal thing of a beat is the largest and highest-contrast object on screen; supporting text
  and secondary objects sit quieter around it.
- **Frame the story.** The focal thing fills most of the frame. Real words go where the story is; everything else stays
  plain. Keep the frame full: no empty corner, no band of nothing under a block, no small panel floating in white.
- **Continuity.** An object that carries across segments, like a component panel, keeps its position and size from one
  segment to the next.
- **Credits are part of the story.** Third-party work on screen gets its author's name in the beat that shows it.

## Build from the design system

A promo is a showcase of the design system too, so everything on screen comes from it:

- **Look it up in the Panda MCP.** Before styling anything, ask the `panda` MCP server what the design system has:
  `get_recipes` for each recipe's variants and `description`, `get_semantic_tokens` and `get_text_styles` for colors
  and type, `get_layer_styles` and `get_patterns` for the rest. Pick from what it returns; never guess a variant or a
  token name.

- **Components first.** Anything the packages ship (inputs, buttons, badges, selects) is the real `@isbatak/react-ui`
  component.
- **Recipes next.** Every other surface uses a `@isbatak/panda-ds/recipes` recipe, picked by its `description`: `card`
  for panels, tiles and code windows, `badge` for labels and step numbers, `heading` for titles. Text uses `textStyle`.
- **`@isbatak/panda-ds` tokens only.** Every color is a panda-ds semantic token, including syntax highlighting: map
  each highlighter token type to a literal `css({ color: "red.fg" })` class.
- **www's accent.** Gray is the base palette and `orange` is the accent, as in `apps/www/theme/global-css.ts`: anything
  that carries the brand (step badges, highlights, solid buttons) takes `colorPalette="orange"`. Third-party brand marks
  keep their own colors.
- **Scope theme switches.** A theme condition like `data-radius` goes on the promo's own root element, never on
  `document`, so it can't leak into other promos.
- **By hand last.** Hand styling is for layout (flex, grid, gaps) and brand marks the recipes don't cover, like a logo
  tile.
- **Scale with `zoom`, not pixels.** Recipes size in tokens, so wrap each block in `zoom: k * unit` (with
  `unit = Math.min(width, height) / 1080`) and leave font sizes and paddings to the recipes. Zoom multiplies when nested.
- **Literal style values.** Panda only generates CSS for values it can read in the source, so a `textStyle` or variant
  passed through a variable renders unstyled. Map props to literal `css({ textStyle: "2xl" })` classes instead.

## Remotion mechanics

- **Frame-driven motion only.** `panda.config.ts` turns off every CSS transition and animation, so all motion comes from
  `useCurrentFrame()`. Search `apps/promos/src` for existing easing, text-reveal and code-highlighting helpers before
  writing new ones.
- **Frames inside a `Sequence` start at 0.** Anything keyed to the absolute timeline (`T`, a schedule of changes) needs
  the segment's start added back: pass `SEGMENTS.<segment>.from` down as a prop.
- **Inline what a frame depends on.** A URL that loads at render time, like a sprite, races the screenshot. Import the
  file with `?raw` and put it in the DOM.
- **Vertical is its own design.** Branch layout and zoom on `tall = height > width` rather than squeezing the wide
  layout; long code lines and big headings need their own zoom to fit 1080 wide.
- **Stills skip codegen.** The render scripts run `panda` first; `remotion still` doesn't, so run `npx panda` after
  changing styles and before rendering stills.
- **Generated assets** go in `public/<name>/`, gitignored, rebuilt by a script under `apps/promos/<name>/`.
- **Pin new dependencies** to exact versions, like the rest of `package.json`.
- **Contact sheets** need the system `ffmpeg`; the one Remotion bundles has no `fps` or `tile` filter.

## Faults

Check each one on the contact sheet and the transition stills, in both orientations:

1. Content swaps between frames with no motion connecting old and new.
2. A beat where several objects compete at the same weight.
3. Empty corners or bands, or a small panel floating with air on all four sides.
4. Text cut off, controls clipped by the frame, or shadows cut at an edge.
5. A shared object that jumps position or size between segments.
6. A hold where nothing moves for more than about two seconds, or a payoff gone before it can be read.
7. Stock decoration: sparkles, gradients, invented logos, or an accent other than orange.
8. Something shown that step 1 didn't verify.
9. A hand-styled box where a component or recipe exists, a font size in pixels, or a hex color.
10. A component that looks different from its demo on the www docs page: square corners, an icon over the text, a
    missing border or padding. Check the recipe with the Panda MCP and the generated CSS in `styled-system/styles.css`,
    and fix the cause in the recipe, the component or `panda.config.ts`, never with overrides in the promo.
