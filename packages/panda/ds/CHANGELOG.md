# @isbatak/panda-ds

## 1.0.0

### Major Changes

- 759c274: The `dialog` and `drawer` recipes follow tl-ds: `size` now sets the density (`sm` or `md`: header padding and
  title size) and the new `contentSize` sets the width (`xs` to `4xl`, `cover` and `full` for dialogs, `xs` to `4xl` and
  `full` for drawers). Replace `size` with `contentSize` where you set a width. Dialogs get a bordered header and
  footer, a border on the content and the modal layer, and both recipes drop a duplicate slot.

### Minor Changes

- 69fa87c: Add a `status` variant to the `badge` recipe that puts a colored dot before the label. Badges are now pill
  shaped and a little wider. Icons marked with `data-icon-start` or `data-icon-end` are sized and offset like the
  button's.
- 04cab08: Add `ButtonStartIcon` and `ButtonEndIcon` with `iconStart` and `iconEnd` conditions, so icons at the start or
  end of a button get a negative margin for optical alignment. The analog button no longer overrides icon `strokeWidth`.
- b4d959a: Accordion takes tl-ds's look: muted item borders, a tighter trigger gap, a muted open background for the
  `subtle` and `enclosed` variants, and content text that follows `size`. The item indicator sits at the end of the
  trigger.
- 22581f0: Buttons: Button gets an `orientation` variant, where `vertical` puts the icon above a short label. New
  Toggle, Clipboard (with a `clipboard` slot recipe) and DownloadTrigger. Field's root, label and orientation styles are
  shared with Clipboard.

  `StartIcon` and `EndIcon`, exported from each framework's `icon` module, replace `ButtonStartIcon`, `ButtonEndIcon`,
  `BadgeStartIcon` and `BadgeEndIcon`. They take `asChild`, and a loading Button's spinner is marked the same way when
  it sits next to text.

- 4676f28: Choice controls in every framework: Checkmark, Radiomark, Checkbox (with `Group`), CheckboxCard and
  RadioGroup are new, and Switch comes to Vue, Svelte and Solid with `Indicator`, `ThumbIndicator` and `RootProvider`.
  Segment Group gets a `tinted` variant, which colours the selection with `colorPalette`, and an `icon` variant for
  icon-only segments.

  Segment Group drops its `variant` prop: `enclosed` is now its only look.

- cc5ddbb: Collapsible's `indicator` slot turns 180° when the content opens.
- 7ea6a77: The `combobox` recipe is restyled to match Select: the list, items, groups and empty state share its look,
  the trigger chevron turns while the list is open, and the input takes the `input` recipe's variants. It gains
  `itemContent` and `itemDescription` slots for two-line items, loses its duplicate `empty` slot, and now shows the
  invalid border in every variant.
- 4c74f1e: The `datePicker` recipe styles preset triggers, leaves room in the input for the trigger and clear trigger,
  shows the invalid border in every variant, uses the disabled layer style, and drops its duplicate `view` slot.
- eb7239f: Add a `0` spacing and sizes token.
- 8515ffb: Floating Panel takes tl-ds's look: a muted border, a compact header and resize handles that match Zag's
  `data-placement`. Tour places `dialog` steps in the middle of the screen and `floating` steps at their `placement`,
  gets a muted border, and pushes the progress text to the start of the control row.
- c8debe6: Layout components: Box, Flex, Stack, HStack, VStack, Grid, GridItem, SimpleGrid, Center, AbsoluteCenter,
  Circle, Square, Container, Bleed, Float, FloatGap, AspectRatio, Wrap, WrapItem, Spacer, Sticky and Separator, plus
  StackSeparator in React. Every one but Box takes `asChild` in React, Vue and Solid, and `as` in Svelte.

  panda-ds: `grid` has no default gap, `flex` and `grid` take `inline`, `bleed` takes each logical side, `stack`,
  `hstack` and `vstack` take `separator`, default gaps use the `2` token, and there are new `sticky` and `floatGap`
  patterns and a `container` recipe in place of Panda's `container` pattern.

- d4a241a: Menu gets `backdrop` and `closeTrigger` slots, a `modalMode` variant that shows it as a bottom sheet, a muted
  border and submenu trigger items styled like items. Checkbox and radio items keep their indicator space in every size.
- 80f88a3: Navigation Menu works without a viewport: each content opens as its own panel under its item. It also
  supports `orientation="vertical"`, with menus opening to the side, and styles `NavigationMenu.Link` inside content as
  a full-width row.
- 93bd878: Add the `pagination` slot recipe in tl-ds's style: page buttons and triggers built from the button recipe,
  with `size` (`xs` to `lg`), `variant` (`ghost`, `outline`, `subtle`, `surface`) and `attached`.
- 0560300: Popover gets a `backdrop` slot, a styled `indicator` and a `modalMode` variant that shows it as a bottom
  sheet. Tooltip gets `sm`, `md` and `lg` sizes. Popover and Hover Card get a muted border.
- 2a5f081: The `rating-group` recipe stacks the label above the stars, shows a pointer on the stars and a focus ring on
  the focused one, and dims the label and stars when disabled.
- 30f9924: The scroll area recipe has a `shadowOverflow` variant that fades the edges where content is scrolled out of
  view.
- eb0e5ee: NativeSelect and Listbox in every framework, and Select in Vue, Svelte and Solid now has every part React
  has: `Label`, `Control`, `ValueText`, `IndicatorGroup`, `Indicator`, `ClearTrigger`, `List`, `ItemGroup`, `Search`,
  `Empty` and the rest, with `alignItemWithTrigger` and `disableAnchorTracking` on the root.

  Select gets `ItemContent` and `ItemDescription` parts for two-line items. Listbox gets `sm` and `md` sizes.
  NativeSelect's indicator now takes its disabled and invalid look from the select next to it.

- 5d533c8: Splitter takes tl-ds's look: a thin separator with a short handle that grows to full length and darkens while
  it's focused or dragged. The recipe drops its duplicated `resizeTriggerIndicator` slot and adds `root` and `panel`
  styles.
- c5c688e: PinInput, NumberInput, Editable and TagsInput in every framework, and PasswordInput and SearchInput come to
  Vue, Svelte and Solid. NumberStepperInput is new: Number Input's parts with the minus and plus buttons on either side
  of a centered value, a `TriggerGroup` and an `InlineLabel` for units, styled by the new `numberStepperInput` recipe.

  PinInput forwards `mask` to Ark instead of treating it as the CSS `mask` style prop, and its label now sits above the
  inputs. Vue, Svelte and Solid component entry points now export each component's hooks, like `usePasswordInput` and
  `useSearchInputContext`.

- c9b2d02: Text inputs in every framework: Input, Textarea, Field, Fieldset (with `Content`) and InputGroup with
  `InputElement` and `InputAddon`. Field gets an `OptionalText` part that shows "(optional)" when the field isn't
  required.

  Input, Textarea, NumberInput, PinInput, Combobox, DatePicker, DateInput and InputAddon get a `plain` variant without a
  border or background. The input recipe now pads itself for InputGroup start and end elements.

- 667c7a9: Toast takes tl-ds's look: a panel with a muted border and an icon colored by the toast type, plus a `body`
  slot. Action Bar's content gets a muted border.
- 8b77abf: Tree view recipe: rename the slots to Ark UI 6's tree view anatomy (`node`, `nodeGroup`, `nodeGroupContent`,
  `nodeExpandTrigger`, `nodeIndicator`, `nodeText`, `indentGuide`, `cell`), replacing the Ark 5 `branch*` and `item*`
  slots. Hide indicators Ark marks `hidden`, style the rename input, and expand the recipe `description`.
- f3b87c3: Typography components: Text, Span, Em, Strong, Heading, Code, Link, LinkBox, LinkOverlay, Mark, Highlight,
  Blockquote, Quote, List, Prose and VisuallyHidden. panda-ds adds `em` and `strong` recipes, and Link sizes the icons
  inside it.
- fdf62b6: The `navigation-menu` recipe's `link` slot is now a top-level link that sits beside the triggers and looks
  like one, as in Ark UI. Links inside the content are no longer styled by the recipe; style them where you render them.
- bf83af6: Add the `passwordInput` and `searchInput` slot recipes. They share their input sizes and variants with the
  `input` recipe, which `numberInput` now uses too. Their in-input buttons look like ghost icon buttons.
- b5876f4: Add the `px` spacing token (`1px`), so hairline offsets and insets use a token instead of a hardcoded value.

### Patch Changes

- 8f02a6d: Avatar recipe: add a `ring` variant, size the fallback icon with the avatar, and scale the `rounded` radius
  with the size (from tl-ds). The avatar and group recipes now list `AvatarGroup` in `jsx`, so Panda extracts the
  variants passed to it.
- 82b1758: Badge recipe: use tl-ds's `l1` radius instead of a pill, and add a `2xs` size.
- 08df277: Icons inside a button no longer take pointer events, so the click always lands on the button. In Solid, a
  click on the icon of a drawer's close button used to be read as the start of a drag and didn't close the drawer.
- d3d4027: Card recipe: add an `interactive` variant with a pointer cursor and hover background, driven by `--card-bg`
  and `--card-bg-hover` variables as in tl-ds.
- d2489ee: Carousel recipe: drop the duplicate `progressText` slot, style the progress text, and turn the trigger icons
  for vertical carousels.
- 9dd78fd: The `colorPicker` recipe uses tokens for its edges, checkerboard and area height, shows a pointer on the
  triggers and swatches, sizes the swatch check, and tightens channel inputs inside the picker.
- 63926cf: The `colorSwatch` recipe's edge and checkerboard use tokens instead of raw values.
- 901ec1a: Data list recipe: add a `separator` variant that draws a line between items, as in tl-ds.
- cb2d5bb: The `dateInput` recipe shows the invalid border in every variant, uses the disabled layer style, and keeps
  the flushed variant to a bottom border.
- 7aeb3b4: The `fileUpload` recipe dims a disabled dropzone and gives the item delete button hover and focus styles.
- 85270f8: The skip nav link sits above other layers with the `skipNav` z-index while it shows.
- e12de6a: The slider root takes the disabled look when it's disabled, and its marker offsets use spacing tokens.
- 0d1c534: Stat recipe: add a `card` variant and an `xs` size, as in tl-ds.
- 8d6f193: Tabs sizes icons in its triggers to match the tab size, from `3` at `2xs` to `5` at `lg`, and keeps them from
  shrinking.
- 97a723e: Tag recipe: take tl-ds's look. Radius `l1` (`l2` at `xl`), medium font weight, a `plain` variant, flex start
  and end elements, and a `button` cursor on the close trigger.
- b2ff60b: The `icon` recipe sizes icons to `1em` by default, so an icon without a `size` follows the font size instead
  of the browser's default SVG size.
- 56f7c3c: Add `Kbd` and `KbdGroup`. `KbdGroup` passes its `size` and `variant` to every `Kbd` inside. The `kbd` recipe
  now centers its content and has a minimum width per size, so single keys stay square.
- 232b7de: Fix the `searchInput` recipe so the input makes room for the search icon. Its selector used `data-scope` and
  `data-part`, which the search input doesn't render. The search icon is also one step larger at every size.

## 0.6.0

### Minor Changes

- 5555ebe: Style the `drawer` recipe from Zag.js 2's `data-swipe-direction`, so a drawer built on Zag or Ark directly
  gets the right edge, radius, animation and stacking offset without setting `placement`. `placement` still works and
  overrides the attribute, which keeps responsive placements working, but it no longer has a recipe default.

  The content now has an `::after` that fills the gap behind the drawer when it is dragged past its open position. Its
  size comes from `--drawer-bleed`, and `float` drawers hide it.

  Adds `swipeArea`, `indent` and `indentBackground` slots.

  Adds a `fade-out-from` keyframe that fades from `var(--fade-out-from, 1)` to `0`. The drawer backdrop uses it on
  close, starting from its swiped opacity instead of jumping back to fully opaque.

- c885fbe: Add a `navigationMenu` slot recipe for Ark UI's NavigationMenu. Triggers sit in a row with a highlight that
  slides between them, and their content opens in a shared viewport panel that resizes to fit it.
- 752aac2: Restyle the `select` recipe after the tl-ds select. The trigger uses input border colors that darken on hover
  and take the focus color while the list is open, set through `--input-border-*` variables. Items and group labels get
  spacing per size, `xs` and `lg` join `sm` and `md`, and a `fit` variant sizes the trigger to its value. New `search`
  and `empty` slots style a search field at the top of the list and the text shown when nothing matches. When the
  content holds a `list`, the list scrolls and the search stays above it. Adds an `inputElement` recipe for icons and
  text inside an input. Content marked with `data-align-item-with-trigger` fades in without sliding so an aligned list
  lines up, and the positioner stacks above the trigger it overlaps.
- 9e9cb46: Rebuild the `table` recipe and add a `grid-table` recipe, both modeled on the tl-ds tables. They share the
  variants `size` (`sm`, `md`, `lg`), `showRowBorder`, `showColumnBorder`, `interactive`, `stickyHeader` and
  `highlightedHeader`, and support sticky start and end columns through `data-sticky`. The `table` recipe drops its
  `variant` (`line`, `outline`) and `striped` variants.

  `--toc-indent` on the `toc` recipe is now a spacing token, `spacing.2.5`, and takes any length.

- 5d4efb2: Add a `toc` slot recipe for Ark UI's table of contents. The `line` variant puts a bar on a border at the
  start of the list, and the `track` variant styles a `track` slot, an SVG line that steps in for nested items, with a
  dot at the end of the active stretch. `size` takes `sm` or `md`, and `--toc-indent` sets how far each level is
  indented.

## 0.5.1

### Patch Changes

- 379834b: Fix the `button` recipe's `icon` variant losing to the `size` padding. Sizes now set `--button-padding-x` and
  `--button-min-width`, and only the `icon` variant applies the padding, so `icon` buttons are square again. You can
  remove any `compoundVariants` workaround for `icon: true`.

## 0.5.0

### Minor Changes

- ab6dae0: Add a boolean `icon` variant to the `button` recipe for square, icon-only buttons. `IconButton` now uses it
  instead of style props.

### Patch Changes

- 86eefaf: Fix the spacing between `line` variant items in `tabs` and `segmentGroup`. The `_notLast` margin was nested
  inside the property, which Panda emits as an invalid CSS property, so it never applied.

## 0.4.0

### Minor Changes

- 4a64aaf: The drawer recipe now animates swipes: a released drag springs back or settles with the speed of the gesture,
  and the backdrop fades as the drawer is swiped away. Drawers opened on top of another scale it back so it peeks out
  behind them. The `size` and `placement` variants accept responsive values, since the recipe no longer uses compound
  variants.

  **Breaking:** the drawer's `contained` variant is now called `float`. Replace `contained` with `float` on
  `Drawer.Root`.

## 0.3.2

### Patch Changes

- 350b86f: Export the generated style types from `@isbatak/panda-ds/types`.

## 0.3.1

### Patch Changes

- 405668d: Generate the switch recipe CSS when `Switch` parts are used in JSX

## 0.3.0

### Minor Changes

- 221777a: Add the `swipeableList` slot recipe.

## 0.2.0

### Minor Changes

- b9fcdf8: Remove the React components from `@isbatak/panda-ds/components/*`. The package now ships only the design
  system (theme, `panda lib` output and generated styled-system). The components moved to `@isbatak/react-ui`
  (`packages/ui/react`).

## 0.1.0

### Minor Changes

- 673d56a: Publish the Panda CSS design system as a `panda lib` package consumable via `designSystem`.

### Patch Changes

- Updated dependencies [d146825]
- Updated dependencies [918fff9]
  - @isbatak/ark-wheel-picker@0.1.0
  - @isbatak/panda-wheel-picker@0.1.0
