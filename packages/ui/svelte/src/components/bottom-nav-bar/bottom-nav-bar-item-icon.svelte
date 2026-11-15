<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BottomNavBarItemIconProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useBottomNavBarStyles } from "./bottom-nav-bar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: BottomNavBarItemIconProps<T> = $props()
  const styles = useBottomNavBarStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().itemIcon, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="itemIcon" {...boxProps} />
