---
"@isbatak/react-ui": minor
"@isbatak/vue-ui": minor
"@isbatak/svelte-ui": minor
"@isbatak/solid-ui": minor
---

PinInput, NumberInput, Editable and TagsInput in every framework, and PasswordInput and SearchInput come to Vue, Svelte
and Solid. NumberStepperInput is new: Number Input's parts with the minus and plus buttons on either side of a centered
value, a `TriggerGroup` and an `InlineLabel` for units, styled by the new `numberStepperInput` recipe.

PinInput forwards `mask` to Ark instead of treating it as the CSS `mask` style prop, and its label now sits above the
inputs. Vue, Svelte and Solid component entry points now export each component's hooks, like `usePasswordInput` and
`useSearchInputContext`.
