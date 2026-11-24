# @isbatak/vue-ui

## 0.1.0

### Minor Changes

- b4d959a: `Accordion.ItemIndicator` shows a chevron when it has no children.
- 011119e: Add `ActionItem`.
- 7091ead: Add `Alert`.
- f9062a9: Add `AngleSlider`.
- 8f02a6d: Add `Avatar` and `AvatarGroup`. `Avatar.Fallback` shows the initials of its `name`, or a user icon without
  one. `AvatarGroup` overlaps its avatars and passes its variant props down to them.
- 7d840c6: Add `Beacon`.
- de0bc0f: Add `BottomNavBar`.
- 72bba8d: Add Breadcrumb to Vue, Svelte and Solid. In every framework, `Breadcrumb.Separator` shows a chevron and
  `Breadcrumb.Ellipsis` shows three dots when they have no children.
- 6c37efc: Buttons: Button gets an `orientation` variant, where `vertical` puts the icon above a short label. New
  Toggle, Clipboard (with a `clipboard` slot recipe) and DownloadTrigger. Field's root, label and orientation styles are
  shared with Clipboard.

  `StartIcon` and `EndIcon`, exported from each framework's `icon` module, replace `ButtonStartIcon`, `ButtonEndIcon`,
  `BadgeStartIcon` and `BadgeEndIcon`. They take `asChild`, and a loading Button's spinner is marked the same way when
  it sits next to text.

- d3d4027: Add `Card`.
- d2489ee: Add `Carousel`. `Carousel.PrevTrigger` and `Carousel.NextTrigger` render a chevron icon button when they have
  no children, and `Carousel.Indicators` renders one indicator per page.
- 6c37efc: Choice controls in every framework: Checkmark, Radiomark, Checkbox (with `Group`), CheckboxCard and
  RadioGroup are new, and Switch comes to Vue, Svelte and Solid with `Indicator`, `ThumbIndicator` and `RootProvider`.
  Segment Group gets a `tinted` variant, which colours the selection with `colorPalette`, and an `icon` variant for
  icon-only segments.

  Segment Group drops its `variant` prop: `enclosed` is now its only look.

- 08df277: `CloseTrigger` on Dialog, Drawer, Popover and Menu renders a small `CloseButton` when it has no children, so
  `<Dialog.CloseTrigger />` is enough. Pass children to render your own button.
- cc5ddbb: Add Collapsible in every framework. With no children, `Collapsible.Indicator` shows a chevron.
- 9dd78fd: ColorPicker in every framework, with every Ark part plus `Input`, `Sliders` and `EyeDropper`. The trigger,
  area, channel sliders and swatch indicator fill themselves in when they have no children.
- 63926cf: ColorSwatch in every framework: pass any CSS color as `value`, and transparent parts show a checkerboard.
- 7ea6a77: Combobox in every framework, with every Ark part plus `IndicatorGroup`, `ItemContent` and `ItemDescription`.
  `Trigger`, `ClearTrigger` and `ItemIndicator` render a chevron, a cross and a check when they have no children.
- 9a94694: Add `Command`, a port of Chakra UI's command palette on Ark's Combobox and Dialog, with
  `useCommandCollection` for fuzzy ranking, groups, keywords, nested and async pages, paged loading and match
  highlighting, and `useCommand` for `Command.RootProvider`.
- 901ec1a: Add `DataList`.
- cb2d5bb: DateInput in every framework, with `Segments` to render a segment for each part of the date.
- 4c74f1e: DatePicker in every framework, with `Header`, `DayTable`, `MonthTable` and `YearTable` to render the calendar
  views, `IndicatorGroup`, and default icons for the trigger, clear trigger and navigation buttons.
- 759c274: Dialog in every framework, and Drawer in Vue, Svelte and Solid. Drawer's `size` now sets the density; use the
  new `contentSize` for its width.
- 0ec98b7: Add `EmptyState`.
- 7aeb3b4: FileUpload in every framework, with `List` and `Items` to render the picked files, `FileText` for the picked
  file names, and default icons for the item preview and delete button.
- 8515ffb: Add Floating Panel in every framework. With no children, `FloatingPanel.StageTrigger` shows an icon for its
  stage and `FloatingPanel.CloseTrigger` shows a close button.

  Tour: `Tour.CloseTrigger` shows a close button when it has no children, `Tour.Actions` is exported, and so are Ark's
  `waitForEvent`, `waitForElement`, `waitForElementValue` and `waitForPromise` helpers.

- aa7abab: Add `Format`.
- 7460e13: Add `Frame`.
- 59798ed: Add `GridTable`.
- 18000e0: Add `ImageCropper`. `ImageCropper.Selection` renders its eight handles and grid when it has no children.
- ada4741: Add `Image`.
- a2cf021: Add `JsonTreeView`.
- 6c37efc: Layout components: Box, Flex, Stack, HStack, VStack, Grid, GridItem, SimpleGrid, Center, AbsoluteCenter,
  Circle, Square, Container, Bleed, Float, FloatGap, AspectRatio, Wrap, WrapItem, Spacer, Sticky and Separator, plus
  StackSeparator in React. Every one but Box takes `asChild` in React, Vue and Solid, and `as` in Svelte.

  panda-ds: `grid` has no default gap, `flex` and `grid` take `inline`, `bleed` takes each logical side, `stack`,
  `hstack` and `vstack` take `separator`, default gaps use the `2` token, and there are new `sticky` and `floatGap`
  patterns and a `container` recipe in place of Panda's `container` pattern.

- 22fd496: Add `LocaleProvider`, `useLocaleContext` and `useFilter`.
- d6363ce: Add `Marquee`.
- d4a241a: Menu gets every Ark part: `RootProvider`, `ContextTrigger`, `Indicator`, `Arrow`, `ItemCommand`, `ItemGroup`,
  `ItemGroupLabel`, `ItemIndicator`, `CheckboxItem`, `RadioItemGroup`, `RadioItem` and `TriggerItem`, plus `Backdrop`
  and `CloseTrigger` for modal mode.

  Vue: `v-model` now reaches every component built on a styled root, such as `Select.Root`, `Combobox.Root`, `Tabs.Root`
  and `Menu.RadioItemGroup`. Panda's generated Vue factory kept `modelValue` for native inputs only; vue-ui's codegen
  now patches it to forward `modelValue` to components too.

- 7a0d7e8: Add `Menubar`.
- 80f88a3: Add Navigation Menu in Vue, Svelte and Solid, with the same parts as React.
- 93bd878: Add Pagination in every framework. `Pagination.Items` renders the page buttons and ellipses,
  `Pagination.PageText` shows the position as text, and the prev, next, first and last triggers show chevron icons when
  they have no children.
- 0560300: Add `Popover.Backdrop` and `Popover.Indicator`. Svelte's Hover Card root now binds `open`.
- 6daa64e: Add `portal`, `presence` and `focus-trap` to every framework package. Presence and FocusTrap re-export Ark
  UI's. Portal re-exports Ark's in React and Svelte, wraps Vue's `Teleport` in Vue, and stays the lazy Solid Portal in
  Solid.
- 55b27a2: Add `ProgressCircle`.
- 4ac0079: Add `Progress`.
- 18b9284: Add `QrCode`. `QrCode.Frame` renders its pattern when it has no children.
- 2a5f081: RatingGroup in every framework. `RatingGroup.Items` renders a star for each item, and
  `RatingGroup.ItemIndicator` fills it up to the rating, including half stars. Pass your own icon to draw something
  other than a star.
- ca6239b: Add `Ripple`.
- 30f9924: Add `ScrollArea`. `ScrollArea.Scrollbar` renders its thumb when it has no children.
- 6c37efc: NativeSelect and Listbox in every framework, and Select in Vue, Svelte and Solid now has every part React
  has: `Label`, `Control`, `ValueText`, `IndicatorGroup`, `Indicator`, `ClearTrigger`, `List`, `ItemGroup`, `Search`,
  `Empty` and the rest, with `alignItemWithTrigger` and `disableAnchorTracking` on the root.

  Select gets `ItemContent` and `ItemDescription` parts for two-line items. Listbox gets `sm` and `md` sizes.
  NativeSelect's indicator now takes its disabled and invalid look from the select next to it.

- 5916938: Add `Sidebar`.
- 938877c: Add `SignaturePad`.
- 1acd3ba: Add `Skeleton`, `SkeletonText` and `SkeletonCircle`.
- 85270f8: Add `SkipNavLink` and `SkipNavContent`. The link jumps to the content's id, `skip-nav` by default.
- e12de6a: Slider gets `RootProvider`, `Thumbs`, which renders a thumb with a hidden input for each value, and `Marks`,
  which renders markers from a `marks` array. `orientation` now reaches the slider as well as the recipe, so vertical
  sliders work.
- 5d533c8: Add Splitter in every framework. With no children, `Splitter.ResizeTrigger` renders a separator and a handle
  and is labelled "Resize".
- 0d1c534: Add `Stat`.
- a562385: Add `Status`.
- 6b4d073: Add Steps in every framework, on Ark UI's Steps, with `Steps.Title`, `Steps.Description`, `Steps.Number` and
  `Steps.Status`. With no children, `Steps.Indicator` shows the step number, then a check once the step is complete.
- 6448fa4: Add `Swap`.
- 600b516: Add `Table`.
- 97a723e: Add `Tag`. `Tag.CloseTrigger` shows a close icon when it has no children.
- 6c37efc: PinInput, NumberInput, Editable and TagsInput in every framework, and PasswordInput and SearchInput come to
  Vue, Svelte and Solid. NumberStepperInput is new: Number Input's parts with the minus and plus buttons on either side
  of a centered value, a `TriggerGroup` and an `InlineLabel` for units, styled by the new `numberStepperInput` recipe.

  PinInput forwards `mask` to Ark instead of treating it as the CSS `mask` style prop, and its label now sits above the
  inputs. Vue, Svelte and Solid component entry points now export each component's hooks, like `usePasswordInput` and
  `useSearchInputContext`.

- 6c37efc: Text inputs in every framework: Input, Textarea, Field, Fieldset (with `Content`) and InputGroup with
  `InputElement` and `InputAddon`. Field gets an `OptionalText` part that shows "(optional)" when the field isn't
  required.

  Input, Textarea, NumberInput, PinInput, Combobox, DatePicker, DateInput and InputAddon get a `plain` variant without a
  border or background. The input recipe now pads itself for InputGroup start and end elements.

- 07b6727: Add `Timeline`.
- ad0e056: Add `Timer`.
- 667c7a9: Add Toast (`createToaster`, `Toaster` and the `Toast` parts) and Action Bar in every framework. With no
  children, `Toaster` renders each toast with a type icon, title, description, action and close button.

  Solid: variant props on a root, like `placement` or `size`, now restyle the parts when they change. Panda's generated
  Solid slot recipe context passed the styles to its parts once; solid-ui's codegen now patches it to pass an accessor.

- 0fa067a: Add Table of contents (`Toc`) in Vue, Svelte and Solid, with the same parts as React, including `Toc.Track`,
  the SVG line that steps in for nested items and follows the scroll direction.
- e43eadd: Add `ToggleGroup`.
- 9842bfd: Add `Tone` and the `detectTone` helper.
- 8b77abf: Add `TreeView`. `TreeView.Nodes` renders the collection recursively, wrapping branches in a node group, and
  `TreeView.NodeIndicator` defaults to `type="expanded"` with a chevron that rotates when the branch opens.
- 6c37efc: Typography components: Text, Span, Em, Strong, Heading, Code, Link, LinkBox, LinkOverlay, Mark, Highlight,
  Blockquote, Quote, List, Prose and VisuallyHidden. panda-ds adds `em` and `strong` recipes, and Link sizes the icons
  inside it.
- 95e8729: Add `ListVirtualizer`, `GridVirtualizer` and `WindowVirtualizer`.
- 3f025b6: `StartIcon` and `EndIcon` take an `offset`, a CSS length added to the recipe's icon pull through
  `--icon-offset`. Add the `command`, `option` and `shift` icons.
- 62d4c23: `Image` uses the new `image` recipe, which adds a faint inset outline. Set `outlineStyle="none"` to turn it
  off.
- 6c37efc: Add `Kbd` and `KbdGroup`. `KbdGroup` passes its `size` and `variant` to every `Kbd` inside. The `kbd` recipe
  now centers its content and has a minimum width per size, so single keys stay square.

### Patch Changes

- 82b1758: Badge picks up the `l1` radius and the new `2xs` size from the recipe.
- 502a9bd: Slider: `Slider.Thumb` sets `data-focus-visible` while the last interaction was the keyboard, so focus rings
  show for keyboard navigation and not on click, and `data-under-text` while it overlaps `Slider.Label` or
  `Slider.ValueText`, so the field variant dims the handle behind them.
- eb7239f: Parts built from Ark components type their props correctly in `.vue` templates.
- Updated dependencies [3f025b6]
- Updated dependencies [c9e7d9b]
  - @isbatak/icons@0.1.0
