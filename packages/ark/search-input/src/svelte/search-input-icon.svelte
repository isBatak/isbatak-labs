<script module lang="ts">
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface SearchInputIconBaseProps extends PolymorphicProps<"div">, RefAttribute {}
  export interface SearchInputIconProps extends Assign<HTMLProps<"div">, SearchInputIconBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { mergeProps } from "@zag-js/svelte"
  import { useSearchInputContext } from "./use-search-input-context.js"

  let { ref = $bindable(null), ...props }: SearchInputIconProps = $props()
  const api = useSearchInputContext()
  const mergedProps = $derived(mergeProps(api().getIconProps(), props))
</script>

<Ark as="div" bind:ref {...mergedProps} />
