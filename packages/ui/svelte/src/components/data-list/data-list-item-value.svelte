<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type DataListItemValueProps<T extends keyof SvelteHTMLElements = "dd"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'dd'">
  import { Box } from "../box"
  import { useDataListStyles } from "./data-list-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: DataListItemValueProps<T> = $props()
  const styles = useDataListStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().itemValue, className] } as Record<string, unknown>)
</script>

<Box as="dd" bind:ref data-slot="itemValue" {...boxProps} />
