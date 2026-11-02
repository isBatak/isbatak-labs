<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"
  import type { UseSearchInputReturn } from "./use-search-input.svelte.js"

  interface RootProviderProps {
    value: UseSearchInputReturn
  }

  export interface SearchInputRootProviderBaseProps extends RootProviderProps, PolymorphicProps<"div">, RefAttribute {}
  export interface SearchInputRootProviderProps extends Assign<HTMLProps<"div">, SearchInputRootProviderBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { SearchInputProvider } from "./use-search-input-context.js"

  let { ref = $bindable(null), value: api, ...localProps }: SearchInputRootProviderProps = $props()
  const mergedProps = $derived(mergeProps(api().getRootProps(), localProps))

  SearchInputProvider(() => api())
</script>

<Ark as="div" bind:ref {...mergedProps} />
