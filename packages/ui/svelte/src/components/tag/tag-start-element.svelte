<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TagStartElementProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useTagStyles } from "./tag-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TagStartElementProps<T> = $props()
  const styles = useTagStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().startElement, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="startElement" {...boxProps} />
