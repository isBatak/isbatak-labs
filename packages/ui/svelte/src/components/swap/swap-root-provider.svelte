<script module lang="ts">
  import { Swap } from "@ark-ui/svelte/swap"
  import { swap, type SwapVariantProps } from "@isbatak/panda-ds/recipes"

  export type SwapRootProviderProps = Swap.RootProviderProps & SwapVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSwapStyles } from "./swap-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SwapRootProviderProps = $props()
  const [variantProps, localProps] = $derived(swap.splitVariantProps(props))
  const styles = $derived(swap(variantProps))
  provideSwapStyles(() => styles)
</script>

<Swap.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
