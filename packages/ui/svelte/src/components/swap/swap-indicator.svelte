<script module lang="ts">
  import { Swap } from "@ark-ui/svelte/swap"

  export type SwapIndicatorProps = Swap.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSwapStyles } from "./swap-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SwapIndicatorProps = $props()
  const styles = useSwapStyles()
</script>

<Swap.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />
