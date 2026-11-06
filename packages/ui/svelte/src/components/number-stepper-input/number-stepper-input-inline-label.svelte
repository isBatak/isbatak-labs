<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type NumberStepperInputInlineLabelProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useNumberStepperInputStyles } from "./number-stepper-input-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: NumberStepperInputInlineLabelProps<T> = $props()
  const styles = useNumberStepperInputStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().inlineLabel, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-inline-label="" {...boxProps} />
