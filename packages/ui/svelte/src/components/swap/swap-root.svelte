<script module lang="ts">
  import { Swap } from "@ark-ui/svelte/swap"
  import { swap, type SwapVariantProps } from "@isbatak/panda-ds/recipes"

  export type SwapRootProps = Swap.RootProps & SwapVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSwapStyles } from "./swap-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SwapRootProps = $props()
  const [variantProps, localProps] = $derived(swap.splitVariantProps(props))
  const styles = $derived(swap(variantProps))
  provideSwapStyles(() => styles)
</script>

<Swap.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
