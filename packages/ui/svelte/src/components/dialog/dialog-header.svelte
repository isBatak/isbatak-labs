<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type DialogHeaderProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useDialogStyles } from "./dialog-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: DialogHeaderProps<T> = $props()
  const styles = useDialogStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().header, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} data-slot="header" />
