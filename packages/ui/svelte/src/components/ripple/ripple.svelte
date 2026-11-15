<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLAttributes } from "svelte/elements"

  export interface RippleOptions {
    /**
     * Start every ripple from the center instead of the pointer position
     * @default false
     */
    centered?: boolean | undefined
    /**
     * Stop spawning new ripples
     * @default false
     */
    disabled?: boolean | undefined
  }

  export interface RippleProps extends Omit<HTMLAttributes<HTMLSpanElement>, keyof RippleOptions>, RippleOptions {
    unstyled?: boolean | undefined
    ref?: Element | null
    asChild?: Snippet<[(props?: HTMLAttributes<HTMLElement>) => HTMLAttributes<HTMLElement>]>
  }
</script>

<script lang="ts">
  import { Ark } from "@ark-ui/svelte"
  import { ripple } from "@isbatak/panda-ds/recipes"
  import { spawnRipple } from "./spawn-ripple"

  let {
    ref = $bindable(null),
    centered = false,
    disabled = false,
    onpointerdown,
    onclick,
    unstyled,
    class: className,
    children,
    ...props
  }: RippleProps = $props()

  const handlePointerDown = (event: PointerEvent & { currentTarget: EventTarget & HTMLSpanElement }) => {
    onpointerdown?.(event)
    if (disabled || event.defaultPrevented || event.button !== 0) return
    spawnRipple(event.currentTarget, centered ? undefined : { x: event.clientX, y: event.clientY })
  }

  const handleClick = (event: MouseEvent & { currentTarget: EventTarget & HTMLSpanElement }) => {
    onclick?.(event)
    if (disabled || event.defaultPrevented || event.detail !== 0) return
    spawnRipple(event.currentTarget)
  }
</script>

<Ark
  as="span"
  bind:ref
  {...props}
  onpointerdown={handlePointerDown}
  onclick={handleClick}
  class={[!unstyled && ripple(), className]}
>
  {@render children?.()}
</Ark>
