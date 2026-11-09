<script module lang="ts">
  import type { Snippet } from "svelte"
  import type { HTMLButtonAttributes } from "svelte/elements"

  export interface MenuCloseTriggerProps extends HTMLButtonAttributes {
    unstyled?: boolean | undefined
    ref?: HTMLButtonElement | null
    asChild?: Snippet<[() => Record<string, unknown>]> | undefined
  }
</script>

<script lang="ts">
  import { useMenuContext } from "@ark-ui/svelte/menu"
  import { useMenuStyles } from "./menu-styles"

  let {
    ref = $bindable(null),
    unstyled,
    class: className,
    children,
    asChild,
    onclick,
    ...props
  }: MenuCloseTriggerProps = $props()
  const menu = useMenuContext()
  const styles = useMenuStyles()

  const mergedProps = $derived({
    type: "button" as const,
    "aria-label": "Close",
    ...props,
    onclick: (event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }) => {
      onclick?.(event)
      if (event.defaultPrevented) return
      menu().setOpen(false)
    },
    "data-slot": "closeTrigger",
    class: [!unstyled && styles().closeTrigger, className],
  })
</script>

{#if asChild}
  {@render asChild(() => mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>{@render children?.()}</button>
{/if}
