<script module lang="ts">
  import { badge, type BadgeVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BadgeVariantProps {
    unstyled?: boolean | undefined
    ref?: HTMLSpanElement | null
  }
</script>

<script lang="ts">
  let { ref = $bindable(null), unstyled, class: className, children, ...props }: BadgeProps = $props()
  const [variantProps, localProps] = $derived(badge.splitVariantProps(props))
</script>

<span bind:this={ref} {...localProps} class={[!unstyled && badge(variantProps), className]}>{@render children?.()}</span>
