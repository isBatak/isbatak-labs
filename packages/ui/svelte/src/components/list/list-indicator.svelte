<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ListIndicatorProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useListStyles } from "./list-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: ListIndicatorProps<T> = $props()
  const styles = useListStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().indicator, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref {...boxProps} />
