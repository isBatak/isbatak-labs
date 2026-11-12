<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TableColumnHeaderProps<T extends keyof SvelteHTMLElements = "th"> = BoxProps<T> & {
    unstyled?: boolean | undefined
    sticky?: "start" | "end" | undefined
  }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'th'">
  import { Box } from "../box"
  import { useTableStyles } from "./table-styles"

  let { ref = $bindable(), unstyled, sticky, class: className, ...props }: TableColumnHeaderProps<T> = $props()
  const styles = useTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().columnHeader, className] } as Record<string, unknown>)
</script>

<Box as="th" bind:ref data-slot="columnHeader" data-sticky={sticky} {...boxProps} />
