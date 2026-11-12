<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type GridTableCellProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & {
    unstyled?: boolean | undefined
    sticky?: "start" | "end" | undefined
  }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useGridTableStyles } from "./grid-table-styles"

  let { ref = $bindable(), unstyled, sticky, class: className, ...props }: GridTableCellProps<T> = $props()
  const styles = useGridTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().cell, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="cell" role="cell" data-sticky={sticky} {...boxProps} />
