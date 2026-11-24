---
"@isbatak/zag-caliper": minor
"@isbatak/ark-caliper": minor
---

The overlay is a Zag machine. `connect(service, normalize)` replaces `connect(normalize)`, and it still runs without a
service for marks drawn outside a `Root`. `props` and `splitProps` replace `rootProps` and `splitRootProps`, `Props`
replaces `RootProps`, and `onOverlayChange` now receives `{ overlay }`. The api exposes `overlay`, `toggled` and
`setOverlay`, and applies the motion defaults once the overlay has changed. The Ark parts are built with
`@isbatak/ark-kit`.
