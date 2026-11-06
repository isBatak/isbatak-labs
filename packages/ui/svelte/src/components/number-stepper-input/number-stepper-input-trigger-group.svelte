<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type NumberStepperInputTriggerGroupProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useNumberStepperInputStyles } from "./number-stepper-input-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: NumberStepperInputTriggerGroupProps<T> = $props()
  const styles = useNumberStepperInputStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().triggerGroup, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} />
