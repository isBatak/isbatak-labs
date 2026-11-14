<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type AlertDescriptionProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useAlertStyles } from "./alert-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: AlertDescriptionProps<T> = $props()
  const styles = useAlertStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().description, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="description" {...boxProps} />
