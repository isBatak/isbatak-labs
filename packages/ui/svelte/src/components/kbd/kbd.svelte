<script module lang="ts">
  import type { KbdVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export interface KbdProps extends HTMLAttributes<HTMLElement>, KbdVariantProps {
    ref?: HTMLElement | null
  }
</script>

<script lang="ts">
  import { kbd } from "@isbatak/panda-ds/recipes"
  import { hasKbdProps, useKbdProps } from "./kbd-props"

  let { ref = $bindable(null), class: className, children, ...props }: KbdProps = $props()
  const contextProps = hasKbdProps() ? useKbdProps() : undefined
  const [variantProps, localProps] = $derived(kbd.splitVariantProps({ ...contextProps?.(), ...props }))
</script>

<kbd bind:this={ref} {...localProps} class={[kbd(variantProps), className]}>{@render children?.()}</kbd>
