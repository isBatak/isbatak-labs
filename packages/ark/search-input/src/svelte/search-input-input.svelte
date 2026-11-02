<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface SearchInputInputBaseProps extends PolymorphicProps<"input">, RefAttribute {}
  export interface SearchInputInputProps extends Assign<HTMLProps<"input">, SearchInputInputBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useSearchInputContext } from "./use-search-input-context.js"

  let { ref = $bindable(null), ...props }: SearchInputInputProps = $props()
  const api = useSearchInputContext()
  const mergedProps = $derived(mergeProps(api().getInputProps(), props))
</script>

<Ark as="input" bind:ref {...mergedProps} />
