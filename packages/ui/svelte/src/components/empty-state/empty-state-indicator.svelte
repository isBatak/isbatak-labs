<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type EmptyStateIndicatorProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useEmptyStateStyles } from "./empty-state-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: EmptyStateIndicatorProps<T> = $props()
  const styles = useEmptyStateStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().indicator, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="indicator" {...boxProps} />
