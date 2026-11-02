<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface SearchInputLabelBaseProps extends PolymorphicProps<"label">, RefAttribute {}
  export interface SearchInputLabelProps extends Assign<HTMLProps<"label">, SearchInputLabelBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useSearchInputContext } from "./use-search-input-context.js"

  let { ref = $bindable(null), ...props }: SearchInputLabelProps = $props()
  const api = useSearchInputContext()
  const mergedProps = $derived(mergeProps(api().getLabelProps(), props))
</script>

<Ark as="label" bind:ref {...mergedProps} />
