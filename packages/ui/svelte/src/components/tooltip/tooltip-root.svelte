<script module lang="ts">
  import { Tooltip } from "@ark-ui/svelte/tooltip"
  import { tooltip, type TooltipVariantProps } from "@isbatak/panda-ds/recipes"

  export type TooltipRootProps = Tooltip.RootProps & TooltipVariantProps
</script>

<script lang="ts">
  import { provideTooltipStyles } from "./tooltip-styles"

  let { open = $bindable(), ...props }: TooltipRootProps = $props()
  const [variantProps, localProps] = $derived(tooltip.splitVariantProps(props))
  const styles = $derived(tooltip(variantProps))
  provideTooltipStyles(() => styles)
</script>

<Tooltip.Root bind:open {...localProps} />
