<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SelectItemContentProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: SelectItemContentProps<T> = $props()
  const styles = useSelectStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().itemContent, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} data-slot="itemContent" />
