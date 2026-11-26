---
name: ark-kit
description:
  Builds Ark UI style React components with @isbatak/ark-kit. Covers turning a Zag machine module like @zag-js/checkbox
  into typed parts with createParts, defining a primitive of your own with definePrimitive (a machine, a controller or a
  static connect), styling the parts with Panda slot recipes, and testing them. Use whenever a project has
  @isbatak/ark-kit installed or the user mentions ark-kit, createParts or definePrimitive.
---

# Build with ark-kit

ark-kit splits a component in two. The **primitive** is its behaviour: framework-free, a Zag machine and its `connect`.
The **parts** are the React components `createParts(primitive, tags)` makes from it: `Root` plus one per anatomy part,
each rendering `ark.<tag>` with `api.get<Part>Props()` merged in and `api.get<Part>State()` passed to `render`.

## Read first

- `node_modules/@isbatak/ark-kit/README.md`: the API with examples.
- `node_modules/@isbatak/ark-kit/dist/react/index.d.ts`: the exact types. When the README and the types disagree, the
  types win.
- The Zag module you wrap: its `index.d.ts` lists `machine`, `connect`, `props`, the `*Props` lists for parts, and the
  `Api` with every `get<Part>Props`.

## Pick your path

1. **Parts for a Zag machine that exists**, like `@zag-js/checkbox` or `@isbatak/zag-caliper`: read
   [references/wrap-a-machine.md](references/wrap-a-machine.md).
2. **A component with no machine yet**: read [references/define-a-primitive.md](references/define-a-primitive.md), then
   path 1.

Every path ends the same way:

3. **Style it**: [references/style-with-panda.md](references/style-with-panda.md).
4. **Test it**: [references/testing.md](references/testing.md).

## Rules for every path

- **Behaviour lives in the primitive.** State, defaults and derived values go in the machine and its `connect`, so every
  framework and an agent bridge get them. The tags only choose elements.
- **Import from `@isbatak/ark-kit/react`.**
- **Part names come from the api.** A tag key `fooBar` needs `getFooBarProps` on the api; its component is
  `<Name>.FooBar`. The types reject a key the api lacks.
- **One shape everywhere**: a `Root` and its parts, nested as the anatomy reads. Change a part's element with `render`.
- **Done** means `tsc --noEmit` passes, every part renders in a test, and each prop the primitive owns reaches its
  getter instead of the DOM.
