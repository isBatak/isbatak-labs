<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type EmptyStateDescriptionProps<T extends keyof SvelteHTMLElements = "p"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'p'">
  import { Box } from "../box"
  import { useEmptyStateStyles } from "./empty-state-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: EmptyStateDescriptionProps<T> = $props()
  const styles = useEmptyStateStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().description, className] } as Record<string, unknown>)
</script>

<Box as="p" bind:ref data-slot="description" {...boxProps} />
