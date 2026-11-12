<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TableCaptionProps<T extends keyof SvelteHTMLElements = "caption"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'caption'">
  import { Box } from "../box"
  import { useTableStyles } from "./table-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TableCaptionProps<T> = $props()
  const styles = useTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().caption, className] } as Record<string, unknown>)
</script>

<Box as="caption" bind:ref data-slot="caption" {...boxProps} />
