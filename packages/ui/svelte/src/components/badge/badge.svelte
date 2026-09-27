<script module lang="ts">
  import { badge, type BadgeVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BadgeVariantProps {
    ref?: HTMLSpanElement | null
  }
</script>

<script lang="ts">
  let { ref = $bindable(null), class: className, children, ...props }: BadgeProps = $props()
  const [variantProps, localProps] = $derived(badge.splitVariantProps(props))
</script>

<span bind:this={ref} {...localProps} class={[badge(variantProps), className]}>{@render children?.()}</span>
