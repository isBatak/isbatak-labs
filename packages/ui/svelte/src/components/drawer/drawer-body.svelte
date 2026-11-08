<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type DrawerBodyProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useDrawerStyles } from "./drawer-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: DrawerBodyProps<T> = $props()
  const styles = useDrawerStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().body, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} data-slot="body" />
