---
"@isbatak/panda-ds": minor
"@isbatak/panda-caliper": minor
"@isbatak/panda-theme-analog": minor
---

Surfaces now step up from the page. Every color ramp gains a `25` step, halfway between white and `50`, and a `975`
step, halfway between `950` and black. Light `bg` is `gray.25` (#fcfcfc) instead of white, so white `bg.panel` surfaces
and the segment indicator read as raised. Dark `bg` is `gray.975` (#0d0d0f) instead of `black`. The new `bg.sunken`
(`gray.100` light, `black` dark) is for sections recessed below the page; analog maps it to `elevation.sunken`.

Dark `bg.panel` moves from `gray.950` to `gray.900`, so cards, menus and dialogs sit lighter than the page, and
`gray.950` takes the same slight cool tint as the other dark steps (#111113). The Caliper canvas drops its border, sits
on `bg.sunken` and takes a `3xl` radius. Enclosed segment tracks use a translucent tint instead of `bg.muted`, so they
stay visible on sunken and muted surfaces.
