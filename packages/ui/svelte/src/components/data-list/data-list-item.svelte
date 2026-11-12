<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type DataListItemProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useDataListStyles } from "./data-list-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: DataListItemProps<T> = $props()
  const styles = useDataListStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().item, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="item" {...boxProps} />
