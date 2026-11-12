<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type GridTableBodyProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useGridTableStyles } from "./grid-table-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: GridTableBodyProps<T> = $props()
  const styles = useGridTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().body, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="body" role="rowgroup" {...boxProps} />
