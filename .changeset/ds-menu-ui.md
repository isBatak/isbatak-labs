---
"@isbatak/react-ui": minor
"@isbatak/vue-ui": minor
"@isbatak/svelte-ui": minor
"@isbatak/solid-ui": minor
---

Menu gets every Ark part: `RootProvider`, `ContextTrigger`, `Indicator`, `Arrow`, `ItemCommand`, `ItemGroup`,
`ItemGroupLabel`, `ItemIndicator`, `CheckboxItem`, `RadioItemGroup`, `RadioItem` and `TriggerItem`, plus `Backdrop` and
`CloseTrigger` for modal mode.

Vue: `v-model` now reaches every component built on a styled root, such as `Select.Root`, `Combobox.Root`, `Tabs.Root`
and `Menu.RadioItemGroup`. Panda's generated Vue factory kept `modelValue` for native inputs only; vue-ui's codegen now
patches it to forward `modelValue` to components too.
