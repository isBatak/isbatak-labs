---
"@isbatak/ark-kit": minor
---

New package. `definePrimitive` describes a widget's behaviour without framework code, as a Zag machine, a controller or
a static `connect`, and `createParts(primitive, tags)` turns it, or any Zag machine module such as `@zag-js/checkbox`,
into typed Ark UI style React parts: `Root` plus one component per anatomy part. A tag can be a component, so Panda's
`withContext(ark.div, "frame")` adds the recipe and style props while Ark keeps `render`, `asChild` and part state.
