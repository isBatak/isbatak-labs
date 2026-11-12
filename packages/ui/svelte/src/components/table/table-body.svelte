<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TableBodyProps<T extends keyof SvelteHTMLElements = "tbody"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'tbody'">
  import { Box } from "../box"
  import { useTableStyles } from "./table-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TableBodyProps<T> = $props()
  const styles = useTableStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().body, className] } as Record<string, unknown>)
</script>

<Box as="tbody" bind:ref data-slot="body" {...boxProps} />
