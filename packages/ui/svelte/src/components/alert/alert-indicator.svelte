<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type AlertIndicatorProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { Icon } from "../icon"
  import { useAlertStatus, useAlertStyles } from "./alert-styles"

  const statusIcons = {
    info: "info-circle",
    warning: "warning",
    success: "check-circle",
    error: "error",
    neutral: "info-circle",
  } as const

  let { ref = $bindable(), unstyled, class: className, children, ...props }: AlertIndicatorProps<T> = $props()
  const styles = useAlertStyles()
  const status = useAlertStatus()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().indicator, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="indicator" {...boxProps}>
  {#if children}
    {@render children()}
  {:else}
    <Icon name={statusIcons[status()]} />
  {/if}
</Box>
