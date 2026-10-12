<script module lang="ts">
  import type { ItemProps } from "@isbatak/zag-text-flip"
  import type { Assign } from "../types.js"
  import type { HTMLProps, PolymorphicProps, RefAttribute } from "./types.js"

  export interface TextFlipItemBaseProps extends ItemProps, PolymorphicProps<"span">, RefAttribute {}
  export interface TextFlipItemProps extends Assign<HTMLProps<"span">, TextFlipItemBaseProps> {}
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import * as textFlip from "@isbatak/zag-text-flip"
  import { mergeProps } from "@zag-js/svelte"
  import { useTextFlipContext } from "./use-text-flip-context.js"

  let { ref = $bindable(null), ...props }: TextFlipItemProps = $props()
  const [itemProps, localProps] = $derived(textFlip.splitItemProps(props))
  const api = useTextFlipContext()
  const mergedProps = $derived(mergeProps(api().getItemProps(itemProps), localProps))
</script>

<Ark as="span" bind:ref {...mergedProps} />
