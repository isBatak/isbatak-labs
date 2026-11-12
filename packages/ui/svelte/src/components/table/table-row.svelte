<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TableRowProps<T extends keyof SvelteHTMLElements = "tr"> = BoxProps<T> & {
    unstyled?: boolean | undefined
    selected?: boolean | undefined
  }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'tr'">
  import { Box } from "../box"
  import { useTableStyles } from "./table-styles"

  let { ref = $bindable(), unstyled, selected, class: className, ...props }: TableRowProps<T> = $props()
  const styles = useTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().row, className] } as Record<string, unknown>)
</script>

<Box as="tr" bind:ref data-slot="row" aria-selected={selected || undefined} {...boxProps} />
