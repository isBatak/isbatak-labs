<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TableFooterProps<T extends keyof SvelteHTMLElements = "tfoot"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'tfoot'">
  import { Box } from "../box"
  import { useTableStyles } from "./table-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TableFooterProps<T> = $props()
  const styles = useTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().footer, className] } as Record<string, unknown>)
</script>

<Box as="tfoot" bind:ref data-slot="footer" {...boxProps} />
