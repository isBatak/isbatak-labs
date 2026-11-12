<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type DataListItemLabelProps<T extends keyof SvelteHTMLElements = "dt"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'dt'">
  import { Box } from "../box"
  import { useDataListStyles } from "./data-list-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: DataListItemLabelProps<T> = $props()
  const styles = useDataListStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().itemLabel, className] } as Record<string, unknown>)
</script>

<Box as="dt" bind:ref data-slot="itemLabel" {...boxProps} />
