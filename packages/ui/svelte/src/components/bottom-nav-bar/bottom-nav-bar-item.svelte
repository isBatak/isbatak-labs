<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type BottomNavBarItemProps<T extends keyof SvelteHTMLElements = "a"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'a'">
  import { Box } from "../box"
  import { useBottomNavBarStyles } from "./bottom-nav-bar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: BottomNavBarItemProps<T> = $props()
  const styles = useBottomNavBarStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().item, className] } as Record<string, unknown>)
</script>

<Box as="a" bind:ref data-slot="item" {...boxProps} />
