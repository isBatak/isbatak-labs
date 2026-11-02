<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface SearchInputClearTriggerBaseProps extends PolymorphicProps<"button">, RefAttribute {}
  export interface SearchInputClearTriggerProps extends Assign<HTMLProps<"button">, SearchInputClearTriggerBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useSearchInputContext } from "./use-search-input-context.js"

  let { ref = $bindable(null), ...props }: SearchInputClearTriggerProps = $props()
  const api = useSearchInputContext()
  const mergedProps = $derived(mergeProps(api().getClearTriggerProps(), props))
</script>

<Ark as="button" bind:ref {...mergedProps} />
