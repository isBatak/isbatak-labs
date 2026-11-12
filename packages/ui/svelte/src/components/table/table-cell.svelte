<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TableCellProps<T extends keyof SvelteHTMLElements = "td"> = BoxProps<T> & {
    unstyled?: boolean | undefined
    sticky?: "start" | "end" | undefined
  }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'td'">
  import { Box } from "../box"
  import { useTableStyles } from "./table-styles"

  let { ref = $bindable(), unstyled, sticky, class: className, ...props }: TableCellProps<T> = $props()
  const styles = useTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().cell, className] } as Record<string, unknown>)
</script>

<Box as="td" bind:ref data-slot="cell" data-sticky={sticky} {...boxProps} />
