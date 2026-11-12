<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TagLabelProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useTagStyles } from "./tag-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TagLabelProps<T> = $props()
  const styles = useTagStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().label, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="label" {...boxProps} />
