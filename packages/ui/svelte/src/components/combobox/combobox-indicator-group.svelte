<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ComboboxIndicatorGroupProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { useComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: ComboboxIndicatorGroupProps<T> = $props()
  const styles = useComboboxStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().indicatorGroup, className] } as Record<string, unknown>)
</script>

<Box as="div" bind:ref {...boxProps} data-slot="indicatorGroup" />
