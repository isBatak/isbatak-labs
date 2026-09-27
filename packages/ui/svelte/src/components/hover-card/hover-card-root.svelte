<script module lang="ts">
  import { HoverCard } from "@ark-ui/svelte/hover-card"
  import { hoverCard, type HoverCardVariantProps } from "@isbatak/panda-ds/recipes"

  export type HoverCardRootProps = HoverCard.RootProps & HoverCardVariantProps
</script>

<script lang="ts">
  import { provideHoverCardStyles } from "./hover-card-styles"

  let { ...props }: HoverCardRootProps = $props()
  const [variantProps, localProps] = $derived(hoverCard.splitVariantProps(props))
  const styles = $derived(hoverCard(variantProps))
  provideHoverCardStyles(() => styles)
</script>

<HoverCard.Root {...localProps} />
