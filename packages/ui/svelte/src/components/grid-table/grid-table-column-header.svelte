<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type GridTableColumnHeaderProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & {
    unstyled?: boolean | undefined
    sticky?: "start" | "end" | undefined
  }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useGridTableStyles } from "./grid-table-styles"

  let { ref = $bindable(), unstyled, sticky, class: className, ...props }: GridTableColumnHeaderProps<T> = $props()
  const styles = useGridTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().columnHeader, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="columnHeader" role="columnheader" data-sticky={sticky} {...boxProps} />
