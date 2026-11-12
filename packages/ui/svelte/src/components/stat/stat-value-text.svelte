<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StatValueTextProps<T extends keyof SvelteHTMLElements = "dd"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'dd'">
  import { Box } from "../box"
  import { useStatStyles } from "./stat-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: StatValueTextProps<T> = $props()
  const styles = useStatStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().valueText, className] } as Record<string, unknown>)
</script>

<Box as="dd" bind:ref data-slot="valueText" {...boxProps} />
