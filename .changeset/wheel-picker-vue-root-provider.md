---
"@isbatak/ark-wheel-picker": patch
---

Fix the Vue `RootProvider` crashing when given the value of `useWheelPicker` in a template. It now takes the unwrapped
API, like Ark UI's own providers.
