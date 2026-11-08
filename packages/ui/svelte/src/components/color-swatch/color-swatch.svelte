<script module lang="ts">
  import { colorSwatch, type ColorSwatchVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export interface ColorSwatchProps extends HTMLAttributes<HTMLSpanElement>, ColorSwatchVariantProps {
    value: string
    unstyled?: boolean | undefined
    ref?: HTMLSpanElement | null
  }
</script>

<script lang="ts">
  let { ref = $bindable(null), value, unstyled, class: className, style, children, ...props }: ColorSwatchProps = $props()
  const [variantProps, localProps] = $derived(colorSwatch.splitVariantProps(props))
</script>

<span
  bind:this={ref}
  {...localProps}
  style={[`--color: ${value}`, style].filter(Boolean).join("; ")}
  class={[!unstyled && colorSwatch(variantProps), className]}>{@render children?.()}</span
>
