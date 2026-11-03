# isbatak labs

A design system (`@isbatak/panda-ds`) with components for several UI frameworks, plus experimental components, all
documented on www.

## Design system

**DS component**: A component of `@isbatak/panda-ds`: one recipe, its framework bindings, its demos, stories and docs
page. _Avoid_: Chakra component, ported component

**Open component**: A DS component exposed as compound parts (`Tabs.Root`, `Tabs.Trigger`, …) that the consumer
composes. _Avoid_: Primitive, compound component

**Closed component**: A prop-driven wrapper over an open component's parts that renders a fixed composition
(`<Switch thumbLabel />`). _Avoid_: Snippet, preset component

**Partially-closed component**: A closed component that still accepts some parts as children for the slots it leaves
open.

**Source**: One of the references a DS component is built from: Chakra UI and tl-ds. Neither has precedence; conflicts
are decided per component. _Avoid_: Upstream

**Conflict**: A point where Chakra, tl-ds and the current DS component disagree on API, anatomy or variants.

## Frameworks and docs

**Supported framework**: A framework every DS component ships for: React, Vue, Svelte and Solid. _Avoid_: Target,
platform

**Demo**: One example of a component, written once per supported framework, shown in the docs and reused by its stories.
_Avoid_: Composition, snippet, example file

**Story**: A Storybook entry for a component in one framework's Storybook, built from its demos plus states the docs
don't show.

**Experiment**: A component documented under Experiments, outside the design system, with its own styling and API
choices. _Avoid_: Prototype
