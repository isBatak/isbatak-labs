<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BottomNavBarItemLabelProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useBottomNavBarStyles } from "./bottom-nav-bar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: BottomNavBarItemLabelProps<T> = $props()
  const styles = useBottomNavBarStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().itemLabel, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="itemLabel" {...boxProps} />
