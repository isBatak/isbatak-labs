<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type AlertTitleProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useAlertStyles } from "./alert-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: AlertTitleProps<T> = $props()
  const styles = useAlertStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().title, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="title" {...boxProps} />
