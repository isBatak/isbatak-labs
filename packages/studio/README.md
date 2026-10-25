# Panda Studio

A visual editor for [`@isbatak/panda-ds`](../panda/ds) based projects, modelled on
[DS Manager](https://www.shadcndesign.com/blog/shadcn-ui-design-system-manager). Preview every component on a live
canvas, edit tokens and recipes where you can see them, then take the result back into the design system as a Panda
preset.

## Usage

Run it from a project that uses `@isbatak/panda-ds`, like Storybook:

```sh
panda-studio                      # dev server for the panda.config in the current directory
panda-studio build -o studio-out  # static build
```

| Option                           | Description                                                        |
| -------------------------------- | ------------------------------------------------------------------ |
| `-c, --config <file>`            | Panda config file (default: discovered from the current directory) |
| `-p, --port <port>`              | Dev server port (default: 6007)                                    |
| `-o, --out <dir>`                | Build output directory (default: `panda-studio-static`)            |
| `--base <path>`                  | Public base path, e.g. `/studio/` (default: `/`)                   |
| `-s, --static-dir <from>[:<to>]` | Serve a file or folder at a URL path, repeatable                   |

The CLI loads the project's config with its `designSystem`, presets and theme variants, and generates styles in
`node_modules/.cache/panda-studio`. The studio runs as two parts, so the project's theme never restyles the studio:

- **Shell** (`index.html`, `src/shell`): the studio UI, always styled by `@isbatak/panda-ds` through the studio's own
  `panda.config.ts`. It reads the project's raw theme for token and recipe lists.
- **Canvas** (`canvas.html` served under `canvas/`, `src/canvas`, `src/demos`): the preview iframe, styled by the
  project's config. When the project uses another design system (for example `@isbatak/panda-theme-analog`), its
  `@isbatak/panda-ds/*` imports, including those in `@isbatak/react-ui`, resolve to that design system.

Theme variants (Panda `themes`) show up in the top bar and switch the canvas with `data-panda-theme`.

When the studio runs from this workspace, [Sourcery](../tools/sourcery) is on in dev: hold ⌘⇧ and click any element in
the studio or the canvas to open the studio source that rendered it (add ⌥ to open the `styled()` definition instead).
React UI and the design system packages are left untagged, and builds never include it.

In this repo, `pnpm studio` at the root runs it against `apps/www` and `pnpm studio:analog` against the analog design
system. The website serves static builds of both, at `/studio` and `/studio/analog`.

## What it does

- **Overview**: a board of product blocks (sign-in, payout, stock chart, pricing, team, …) built only from design-system
  components. It scrolls on both axes; hold Space and drag, or drag with the middle mouse button, to pan. The inspector
  shows the system's identity, foundation values and change counts, with actions to duplicate, reset or delete it.
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
- **Color picker**: color tokens and color properties open a picker (Ark UI `ColorPicker`, styled by the design system's
  `colorPicker` recipe). **Tokens** links to a palette or semantic token; **Custom** picks a raw color with an area, eye
  dropper, hue/alpha sliders and RGBA/HSLA/HSBA inputs. The Light and Dark rows are the colors the page palette uses;
  Recent keeps your last custom colors.
- **Effects**: every shadow token, per light and dark mode, in the inspector's Effects tab, so you can edit them while a
  component is on the canvas. Opening one shows a live preview and its layers (show, hide, add, remove); a layer has
  drop or inner type, X, Y, blur, spread, color and opacity. Drag a field's label to scrub its value (⇧ for steps of
  10).
- **Lint**: WCAG contrast of the semantic color pairs, measured on the canvas with your edits applied.
- **Themes**: edits are saved per theme in the browser, with undo/redo (⌘Z / ⇧⌘Z). **Share** copies a link that opens
  the theme; **Save to source** (dev only) writes the edits into the theme's own files: the file that defines each token
  or recipe, in the project first and then its design system. Values that aren't literals in the source (spreads,
  generated palettes) are kept in the studio and reported.
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
