<script module lang="ts">
  import type { KbdVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export interface KbdGroupProps extends HTMLAttributes<HTMLElement>, KbdVariantProps {
    unstyled?: boolean | undefined
    ref?: HTMLElement | null
  }
</script>

<script lang="ts">
  import { css } from "@isbatak/panda-ds/css"
  import { kbd } from "@isbatak/panda-ds/recipes"
  import { provideKbdProps } from "./kbd-props"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: KbdGroupProps = $props()
  const [variantProps, localProps] = $derived(kbd.splitVariantProps(props))
  provideKbdProps(() => variantProps)
</script>

<kbd
  bind:this={ref}
  {...localProps}
  class={[!unstyled && css({ display: "inline-flex", alignItems: "center", gap: "1" }), className]}
>
  {@render children?.()}
</kbd>
