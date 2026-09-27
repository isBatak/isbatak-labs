<script module lang="ts">
  import { spinner, type SpinnerVariantProps } from "@isbatak/panda-ds/recipes"
  import type { HTMLAttributes } from "svelte/elements"

  export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement>, SpinnerVariantProps {
    ref?: HTMLSpanElement | null
  }
</script>

<script lang="ts">
  import { hasSpinnerProps, useSpinnerProps } from "./spinner-props"

  let { ref = $bindable(null), class: className, ...props }: SpinnerProps = $props()
  const contextProps = hasSpinnerProps() ? useSpinnerProps() : undefined
  const [variantProps, localProps] = $derived(spinner.splitVariantProps({ ...contextProps?.(), ...props }))
</script>

<span bind:this={ref} {...localProps} class={[spinner(variantProps), className]}></span>
