<script module lang="ts">
  import type { ItemProps } from "@isbatak/zag-masonry"
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface MasonryItemBaseProps extends ItemProps, PolymorphicProps<"div">, RefAttribute {}
  export interface MasonryItemProps extends Assign<HTMLProps<"div">, MasonryItemBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import * as masonry from "@isbatak/zag-masonry"
  import { mergeProps } from "@zag-js/svelte"
  import { useMasonryContext } from "./use-masonry-context.js"

  let { ref = $bindable(null), ...props }: MasonryItemProps = $props()
  const [itemProps, localProps] = $derived(masonry.splitItemProps(props))
  const api = useMasonryContext()
  const mergedProps = $derived(mergeProps(api().getItemProps(itemProps), localProps))
</script>

<Ark as="div" bind:ref {...mergedProps} />
