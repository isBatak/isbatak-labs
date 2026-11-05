# Buttons and form controls: decisions questionnaire

**Status:** answered on 2026-11-04. Every recommendation was accepted, except these:

- MenuButton isn't a menu trigger in tl-ds: it stacks an icon over a short label (app rails, toolbars, bottom bars). It
  ships as a Button variant instead of a component: `orientation="vertical"`, with the icon above the label, a min width
  and the ghost look.
- Segment Group keeps tl-ds's selection colouring under the name `tinted`: the indicator and the selected item take the
  group's `colorPalette`, so each segment can have its own colour by changing the palette with the value.
- Segment Group keeps tl-ds's `compact` under the name `icon`, matching Button's `icon` variant: items lose their side
  padding for icon-only segments.

**Purpose:** settle every open decision for the Buttons and form controls category, so building it can start.

**How to answer:** each question has a recommendation, so `ok` takes it. "Not sure" is fine; I'll bring options to that
one before building it.

## Context

This category has 38 components: button, menu-button, toggle, checkbox, checkmark, checkbox-card, radio-group,
radiomark, radio-card, switch, segment-group, input, input-addon, input-element, input-group, textarea, field, fieldset,
native-select, select, combobox, listbox, number-input, number-stepper-input, pin-input, password-input, search-input,
tags-input, editable, slider, rating-group, color-picker, color-swatch, date-input, date-picker, file-upload, clipboard
and download-trigger.

Already here: Button, Radio Card, Segment Group, Select and Slider in all four frameworks; Switch, Input Group, Password
Input and Search Input in React only (Search Input's headless package already has bindings for all four). panda-ds has a
recipe for almost every component, ported from Chakra.

Where tl-ds and Chakra differ, it's mostly this: tl-ds keeps only `sm` and `md` sizes, calls its borderless input
variant `plain` where Chakra has `flushed`, and adds a few parts. The questions below cover each difference.

## Category-wide

### Should the category ship in sub-slices, each committed after review?

The sub-slices would be:

1. Buttons and toggles: button, menu-button, toggle, clipboard, download-trigger.
2. Choice controls: checkbox, checkmark, checkbox-card, radio-group, radiomark, radio-card, switch, segment-group.
3. Text inputs: input, input-addon, input-element, input-group, textarea, field, fieldset, password-input, search-input,
   pin-input, number-input, number-stepper-input, editable, tags-input.
4. Selects: native-select, select, combobox, listbox.
5. Pickers: slider, rating-group, color-picker, color-swatch, date-input, date-picker, file-upload.

Recommendation: yes, in that order.

>

### Should panda-ds keep Chakra's full size scales rather than tl-ds's `sm` and `md`?

Chakra's scales are a superset of tl-ds's, so nothing tl-ds uses is lost.

Recommendation: keep Chakra's.

>

### Should the input family gain tl-ds's `plain` variant next to Chakra's `flushed`?

tl-ds has `plain` (no border, no background) on input, number-input, pin-input, date-input and native-select. Chakra has
`flushed` (only a bottom border) instead, and native-select already has both.

Recommendation: add `plain` to input, textarea, number-input, pin-input, date-input, combobox and date-picker, and keep
`flushed`.

>

### Should the components that already exist keep their current APIs?

Button, Radio Card, Segment Group, Select, Slider, Switch, Input Group, Password Input and Search Input were ported
earlier. Their audit would only add what this questionnaire decides, the missing frameworks, demos and docs.

Recommendation: yes, keep their APIs.

>

## Buttons and toggles

### Should MenuButton ship with tl-ds's recipe?

tl-ds has a `menuButton` recipe (a `ghost` variant and `sm`/`md` sizes, with a `loading` prop) for the button that opens
a menu. The alternative is no MenuButton, using `<Menu.Trigger asChild><Button /></Menu.Trigger>` instead.

Recommendation: ship it with tl-ds's recipe, since you chose to port it.

>

### Should Toggle follow Chakra: Ark's Toggle wrapping a Button, with no recipe of its own?

Chakra's Toggle is Ark's `Toggle.Root` used with `asChild` on a Button, plus `Toggle.Indicator`. tl-ds has an empty
`toggle` recipe.

Recommendation: follow Chakra.

>

### Should Clipboard take tl-ds's slot recipe with an `orientation` variant?

Chakra's Clipboard has no recipe. tl-ds styles it, laying the trigger and value out horizontally or vertically.

Recommendation: yes, take tl-ds's recipe.

>

### Should DownloadTrigger be a thin wrapper over Ark's, with no styling?

It's a button behaviour, not a look, and you'd normally use it with `asChild` on a Button.

Recommendation: yes.

>

## Choice controls

### Should Segment Group drop tl-ds's `brandable` and `compact` variants?

`brandable` switches to TradeLocker's brand colours, and `compact` tightens the padding. The existing recipe here has
Chakra's variants plus `fitted` and `justify`, and its sizes already cover `compact`.

Recommendation: drop both.

>

## Text inputs

### Should Field get tl-ds's `OptionalText` part?

It renders the "(optional)" hint next to the label when a field isn't required, as `RequiredIndicator` does for required
ones.

Recommendation: yes.

>

### Should NumberStepperInput be its own recipe, using NumberInput's parts?

tl-ds's NumberStepperInput is a number input with the decrement and increment buttons on either side of the value, and a
field-style label. You said it's NumberInput styled differently, so it would reuse NumberInput's parts with a
`numberStepperInput` recipe.

Recommendation: yes.

>

## Selects

### Should Combobox get tl-ds's `ItemContent` and `ItemDescription` parts?

They lay out a two-line option, title and description, as the Select "item description" demo does with plain elements.

Recommendation: yes, and give Select the same two parts so the two match.

>

### Should Listbox get tl-ds's `sm` and `md` sizes?

The recipe here has no sizes.

Recommendation: yes.

>

## Pickers

### Should Color Picker and Date Picker ship with Chakra's full anatomy?

They're large: about 480 and 650 lines in Chakra, with presets, swatches, channel inputs and multiple views. The recipes
are already in panda-ds.

Recommendation: yes, the full anatomy, with Chakra's examples.

>

## Anything else?

Is there anything from tl-ds's form components you rely on that isn't covered here, such as its partially-closed
wrappers (they're planned separately)?

>
