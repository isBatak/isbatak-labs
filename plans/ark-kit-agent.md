# ark-kit agent support

Let an AI agent read and drive components built with `@isbatak/ark-kit`, through the agent bridge in
[chakra-ui/zag#3659](https://github.com/chakra-ui/zag/pull/3659), modeled on ui-sdk's
([docs](https://ui-sdk.dev/docs/agents),
[agent.ts](https://github.com/vercel-labs/ui/blob/main/packages/core/src/page/agent/agent.ts)).

Status: possible, blocked on the zag PR. No code changed yet.

## How the bridge finds components

|                     | ui-sdk                                                  | zag#3659                                                                                                                                   |
| ------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Discovery           | Kernel `watchers` hear every primitive instance         | Every adapter's `useMachine` calls `reportMachine({ machine, service })`; `subscribeMachines` hears them (core part split out to #3666)    |
| Description         | `agent` key on `definePrimitive`, next to the behaviour | `AgentDescriptor` per machine in `@zag-js/agent`: `kind`, `machine`, `connect`, `element(scope)`, `name`, `state(api)`, `actions`, `items` |
| Finding the element | Registry holds the element                              | `data-<part>="<scope.id>"`, from the anatomy                                                                                               |

## What each primitive kind gets

| Kind                        | Visible                | Why                                                                                                                                            |
| --------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Machine (checkbox, caliper) | Yes, once the PR ships | `createParts`' `Root` calls `@zag-js/react`'s `useMachine`, which will report it. The primitive already has `machine`, `connect` and `anatomy` |
| Static                      | No, by design          | No state and no service: nothing to read or drive                                                                                              |
| Controller (wheel-picker)   | No                     | `reportMachine` needs a `Service`; a controller has none                                                                                       |

## Decisions

- Describe the agent surface on the primitive, like ui-sdk, not in a separate descriptor package. Whoever renders the
  component gets it.
- Map to zag's `AgentDescriptor` instead of building a second bridge. One `createAgent` sees Zag's own components and
  ours.
- Stateful controllers become machines. Wheel-picker's `value` moves into a small zag machine; the controller keeps only
  DOM scrolling. That makes it framework-agnostic and visible in one change, instead of adding `subscribe` to the
  controller.

## Plan

1. **Neutral entry for `definePrimitive`.** Export it, its types and `nameOf` from `@isbatak/ark-kit` (root), not
   `@isbatak/ark-kit/react`. Needed by the agent entry and by Solid and Vue later.
2. **Machine id in part attributes.** zag/caliper's `connect` writes `parts.<part>.attrs("")`; pass `service.scope.id`
   so `data-caliper-root="<id>"` is findable by the bridge. Keep `""` when there's no service (standalone).
3. **`agent` key on `definePrimitive`**, data only, no framework code:

   ```ts
   definePrimitive({
     anatomy: caliper.anatomy,
     machine: caliper.machine,
     connect: caliper.connect,
     props: caliper.props,
     standalone: true,
     agent: {
       actions: ["setOverlay"],
       state: (api) => ({ overlay: api.overlay }),
     },
   })
   ```

   Fields: `actions` (api method names, typed against `ApiOf<M>`), `state(api)`, optional `items(api)`, `value` key,
   `name` (label part). Only machine primitives take it; the types reject it on static and controller kinds.

4. **`@isbatak/ark-kit/agent` entry**: `toAgentComponent(primitive)` returns zag's `AgentDescriptor`:
   - `kind`: the primitive's name
   - `element`: the anatomy's root part by `scope.id`
   - `name`: the label part's text, else the root's accessible name
   - `actions`: each listed method as `({ api, args }) => api()[method](...args)`
   - `state`, `items`, `value`: passed through

   `@zag-js/agent` is an optional peer, so apps without agents never load it. Usage:
   `createAgent({ components: [...allComponents, toAgentComponent(caliperPrimitive)] })`.

5. **Agent change reason.** Add `reason` to caliper's `OverlayChangeDetails` and `setOverlay(overlay, reason?)`, so an
   app sees `reason: "agent"`, as the 16 machines in the PR do.
6. **Wheel-picker value machine** (see Decisions), then give it `agent: { actions: ["setValue"], items }`.
7. **Tests**: a jsdom test in ark/kit that starts a `createAgent` with `toAgentComponent(caliperPrimitive)`, snapshots a
   rendered caliper, and toggles the overlay through `act`.

## Order

1, 2 and 5 help without the PR and can land any time. 3 can land typed against the PR branch's `AgentDescriptor`. 4, 6's
agent key and 7 wait for `subscribeMachines` and the adapters' reporting in a released `@zag-js/core` and
`@zag-js/react` (#3666), then `@zag-js/agent` (#3659).

## Open questions

- Does `@zag-js/agent` export `AgentDescriptor` and `defineAgentComponent` publicly once merged? The plan relies on
  both.
- ui-sdk guesses actions from method names (`set*`, `toggle`, …) when there's no `agent` key. Worth copying, or keep
  agents opt-in per primitive?
