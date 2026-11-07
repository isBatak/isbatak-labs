---
"@isbatak/panda-ds": minor
"@isbatak/react-ui": minor
"@isbatak/vue-ui": minor
"@isbatak/svelte-ui": minor
"@isbatak/solid-ui": minor
---

NativeSelect and Listbox in every framework, and Select in Vue, Svelte and Solid now has every part React has: `Label`,
`Control`, `ValueText`, `IndicatorGroup`, `Indicator`, `ClearTrigger`, `List`, `ItemGroup`, `Search`, `Empty` and the
rest, with `alignItemWithTrigger` and `disableAnchorTracking` on the root.

Select gets `ItemContent` and `ItemDescription` parts for two-line items. Listbox gets `sm` and `md` sizes.
NativeSelect's indicator now takes its disabled and invalid look from the select next to it.
