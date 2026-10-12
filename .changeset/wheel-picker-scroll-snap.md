---
"@isbatak/zag-wheel-picker": minor
"@isbatak/ark-wheel-picker": minor
"@isbatak/panda-wheel-picker": minor
---

Rebuild the wheel picker on native scroll snapping, following the approach in Zag's "Build a wheel picker" post. The
state machine, collection, 3D drum and highlight item parts are gone. Use `createWheelPicker` with plain `items`,
`loop`, `itemHeight` and `visibleCount`. Compatible with Zag 2 and Ark UI 6.
