# Overlays: decisions questionnaire

**Status:** answered on 2026-11-08. Every recommendation was accepted, except this one:

- Dialog and Drawer take tl-ds's split: `size` sets the density (`sm` and `md`: header padding and title text style) and
  a new `contentSize` sets the width (`xs` to `4xl`, `cover` and `full`). For Drawer this replaces its current `size`,
  which was the width, so it's a breaking change to the existing Drawer API.

**Purpose:** settle every open decision for the Overlays category, so building it can start.

**How to answer:** each question has a recommendation, so `ok` takes it. "Not sure" is fine; I'll bring options to that
one before building it.

## Context

This category has 13 components: dialog, drawer, popover, hover-card, tooltip, menu, floating-panel, toast, action-bar,
tour, portal, presence and focus-trap.

Already here:

- **All four frameworks, one demo and a docs page:** Popover, Hover Card, Tooltip, Menu and Tour.
- **React only, 13 demos:** Drawer.
- **Recipe only:** Dialog, Floating Panel, Toast and Action Bar.
- **Nothing:** Portal, Presence and Focus Trap, which are Ark utilities with no styles.

tl-ds has Dialog, Drawer, Popover, Hover Card, Tooltip, Menu, Floating Panel, Toast, Presence and a Portal re-export. It
has no Action Bar, Tour or Focus Trap.

Where tl-ds and Chakra differ:

- **Dialog and Drawer sizing:** tl-ds splits `size` (density) from `contentSize` (width).
- **Mobile bottom sheet:** tl-ds adds a `modalMode` variant to Menu and Popover.
- **Tooltip:** tl-ds gives it sizes.
- **Floating drawer:** tl-ds names it `contained`, where this repo already has `float`.

## Category-wide

### Should the category ship in this order?

1. Dialog and Drawer, which share a recipe shape.
2. Popover, Hover Card and Tooltip.
3. Menu.
4. Toast and Action Bar.
5. Floating Panel and Tour.
6. Portal, Presence and Focus Trap.

Recommendation: yes, in that order.

>

### Should the components that already exist keep their current APIs?

Popover, Hover Card, Tooltip, Menu, Tour and Drawer were ported earlier. Their audit would add what this questionnaire
decides, the missing frameworks, Chakra's examples, stories and docs.

Recommendation: yes, keep their APIs.

>

## Dialog and Drawer

### Should `size` stay Chakra's width scale, rather than tl-ds's split into `size` and `contentSize`?

In Chakra, `size` sets the width: `xs` to `xl`, `cover` and `full`. tl-ds uses `size` for density instead: `sm` and `md`
change the header padding and the title's text style. tl-ds then adds `contentSize` for the width, from `xs` to `4xl`.
The density difference between tl-ds's `sm` and `md` is small.

Recommendation: keep Chakra's `size` as the width, and add tl-ds's `2xl` to `4xl` widths to it. Don't add a density
variant.

>

### Should the floating drawer keep this repo's name, `float`, rather than tl-ds's `contained`?

Both pad the positioner and round the content, so the drawer sits inside the viewport instead of against its edge.

Recommendation: keep `float`.

>

### Should Dialog ship with Chakra's examples, including the alert dialog and the dialog inside a drawer?

Recommendation: yes. The alert dialog sets `role="alertdialog"`, and the nested dialog shows layering.

>

## Popover, Hover Card and Tooltip

### Should Popover and Menu get tl-ds's `modalMode`, which turns them into a bottom sheet with a backdrop?

In `modalMode`, the content leaves its anchor and sits at the bottom of the screen above a backdrop, with a close
button. tl-ds uses it responsively, for example `modalMode={{ base: true, lg: false }}`, so a menu is a sheet on phones
and a dropdown on desktop. It needs `Backdrop` and `CloseTrigger` parts in Menu, and a `Backdrop` part in Popover.

Recommendation: yes, for Popover and Menu.

>

### Should Tooltip get tl-ds's `sm`, `md` and `lg` sizes?

The Tooltip recipe here has no sizes.

Recommendation: yes, with `md` as the default.

>

### Should Popover keep tl-ds's `Indicator` part?

It's a chevron in the trigger that turns while the popover is open, like Select's indicator. Chakra has no such part.

Recommendation: yes. Menu already has one.

>

## Toast and Action Bar

### Should Toast ship with Chakra's `Toaster` and `createToaster`, and a status icon per type?

Ark's Toast needs a toaster store and a `Toaster` that renders the toasts. Chakra wraps both and shows an icon for
`success`, `error`, `warning`, `info` and `loading`.

Recommendation: yes, in every framework, with the icons drawn from the sprite.

>

### Should Action Bar be built on Ark's Popover, as Chakra does?

Action Bar is the floating bar that shows bulk actions when items are selected. Ark has no Action Bar, so Chakra builds
it on Ark's Popover with the popover kept open while there's a selection.

Recommendation: yes, the same way, in every framework.

>

## Floating Panel and Tour

### Should Floating Panel ship with Ark's full anatomy?

That's the drag trigger, resize triggers, stage triggers (minimize, maximize, restore) and the close trigger.

Recommendation: yes, with default icons for the stage and close triggers.

>

## Portal, Presence and Focus Trap

### Should Portal, Presence and Focus Trap be re-exported from each framework's package, each with one demo and a short docs page?

They have no styles. Docs pages make them findable next to the components that use them.

Recommendation: yes. They get no recipe and no stories beyond the demo.

>

## Anything else?

>
