<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements"

  export interface ToastIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
    unstyled?: boolean | undefined
    ref?: HTMLSpanElement | null
  }
</script>

<script lang="ts">
  import { useToastContext } from "@ark-ui/svelte/toast"
  import { Icon } from "../icon"
  import { Spinner } from "../spinner"
  import { useToastStyles } from "./toast-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: ToastIndicatorProps = $props()
  const toast = useToastContext()
  const styles = useToastStyles()

  const typeIcons = {
    success: "check-circle",
    error: "error",
    info: "info-circle",
    warning: "warning",
  } as const

  const type = $derived(toast().type)
  const icon = $derived(type && type in typeIcons ? typeIcons[type as keyof typeof typeIcons] : undefined)
</script>

{#if children || type === "loading" || icon}
  <span bind:this={ref} {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]}>
    {#if children}
      {@render children()}
    {:else if type === "loading"}
      <Spinner size="sm" />
    {:else if icon}
      <Icon name={icon} />
    {/if}
  </span>
{/if}
