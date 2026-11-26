# Define a primitive

`definePrimitive` types a primitive and names it. A primitive is a plain object in one of three kinds; pick by what the
component holds:

| It holds                                                          | Kind           | Shape                                                                              |
| ----------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| State a person changes, like a value, an open flag or a selection | **machine**    | `machine`, `connect(service, normalize)`, `props`, `anatomy`                       |
| Only DOM work, like measuring or scrolling, on top of that state  | **controller** | `create()` returning `connect(props, normalize)`, `mount(getProps)`, `sync(props)` |
| Nothing: every part is a function of its own props                | **static**     | `connect(normalize)`, `props`                                                      |

Reach for a machine whenever there is state. A machine runs in every framework Zag supports and an agent bridge can find
it; a controller is invisible to both. Keep a controller for DOM work only, with its state in a machine beside it.

## Write the machine

Lay it out like a Zag machine package, one concern per file:

```text
src/
├── <name>.anatomy.ts   # createAnatomy("<name>").parts("root", …)
├── <name>.types.ts     # Props, Schema, Api
├── <name>.props.ts     # props = createProps<Props>()([...]), splitProps, and a *Props list per part getter
├── <name>.machine.ts   # createMachine<Schema>({ props, context, initialState, on, states, implementations })
├── <name>.connect.ts   # connect(service, normalize): one get<Part>Props per anatomy part
└── index.ts
```

- **Controlled and uncontrolled** state is a `bindable` with `defaultValue: prop("defaultX")`, `value: prop("x")` and
  `onChange` calling `prop("onXChange")?.({ x })`. Callbacks receive a details object.
- **Part attributes** come from the anatomy: `parts.root.attrs(service.scope.id)`, never hand-written `data-*` names.
- **The api** exposes the state (`checked`, `overlay`) and setters (`setChecked`, `setOverlay`) beside the getters, so a
  part, an app or an agent can read and drive it.
- **`createProps`** must list every key of `Props`; the type errors name the missing ones.

## Name it

`name`, or the anatomy's root part, names the components: `data-caliper-root` gives `CaliperRoot` and `CaliperFrame`.
Give a static or controller primitive a `name` when it has no anatomy.

## Hand it to createParts

```ts
const primitive = definePrimitive({ anatomy, machine, connect, props })
const parts = createParts(primitive, { root: "div", trigger: "button" })
```

Then continue with [wrap-a-machine.md](wrap-a-machine.md) for the tags.
