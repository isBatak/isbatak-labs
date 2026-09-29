# Panda Studio

A visual editor for [`@isbatak/panda-ds`](../../packages/panda/ds), modelled on
[DS Manager](https://www.shadcndesign.com/blog/shadcn-ui-design-system-manager). Preview every component on a live
canvas, edit tokens and recipes where you can see them, then take the result back into the design system as a Panda
preset.

```sh
pnpm studio   # from the repo root: builds the design system, then starts the studio
```

## What it does

- **Foundations**: Overview, Color, Typography, Radius, Shadow and Spacing pages show tokens next to live components.
  Click a swatch to edit it; semantic tokens are edited per color mode (Light / Dark).
- **Components**: every component in `@isbatak/react-ui` (plus a few recipe-only ones) has a Demo page and a Matrix of
  all variant combinations. **⌘/Ctrl-click** any part on the canvas, or pick it in **Component Layers**, to edit it in
  the Style panel.
- **Component Layers**: a tree of the parts rendered on the canvas, nested the way they are in the DOM (a Button inside
  a Card footer shows up there). Hover a layer to outline it on the canvas; drag the panel edges to resize the sidebar
  and the layers panel.
- **Style panel**: a part is edited for _all variants_ or a single variant value, and for a state (hover, open,
  disabled, …). Values accept token names (`blue.500`, `4`, `l2`) with suggestions, or raw CSS.
- **Lint**: WCAG contrast of the semantic color pairs, measured on the canvas with your edits applied.
- **Themes**: edits are saved per theme in the browser, with undo/redo (⌘Z / ⇧⌘Z). **Share** copies a link that opens
  the theme; **Save to repo** (dev only) writes `themes/<name>.json` and `themes/<name>.preset.ts`.
- **Get code**: exports the theme as a Panda preset, CSS, or studio JSON.

## How it works

The canvas is an iframe (`canvas.html`) so edits never restyle the studio itself. The studio reads the raw theme from
`@isbatak/panda-ds/theme` and keeps edits in a small JSON document (`src/lib/doc.ts`):

- **Live preview**: `src/lib/css.ts` turns the document into CSS in the same cascade layers Panda generates (`tokens`,
  `recipes.base`, `recipes.slots.variants`, …), so an edit behaves exactly like the theme change would. A base edit
  still loses to a variant, and style props on an instance still win.
- **Export**: `src/lib/export.ts` writes the same edits as `theme.extend` in a preset, reusing the keys the recipe
  already uses (`bg`, `px`) so Panda's deep merge replaces them.

To make an exported theme part of the design system, add the preset to `presets` in `packages/panda/ds/panda.config.ts`.

## Adding a component

1. Add it to `src/components.ts` with the key of its recipe in the theme.
2. Write `src/demos/<name>.tsx` exporting a `Demo` (sections for the demo page) and a `Sample` (one matrix cell that
   spreads the variant props it gets onto the root), and register both in `src/demos/index.ts`.
3. Add it to the sidebar in `src/shell/sidebar.tsx` and the gallery in `src/canvas/canvas-app.tsx`.
