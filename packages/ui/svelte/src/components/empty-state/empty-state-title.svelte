<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type EmptyStateTitleProps<T extends keyof SvelteHTMLElements = "h3"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'h3'">
  import { Box } from "../box"
  import { useEmptyStateStyles } from "./empty-state-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: EmptyStateTitleProps<T> = $props()
  const styles = useEmptyStateStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().title, className] } as Record<string, unknown>)
</script>

<Box as="h3" bind:ref data-slot="title" {...boxProps} />
