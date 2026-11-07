<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type NativeSelectIndicatorProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> & {
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { Box } from "../box"
  import { Icon } from "../icon"
  import { useNativeSelectStyles } from "./native-select-styles"

  let { ref = $bindable(), unstyled, class: className, children, ...props }: NativeSelectIndicatorProps<T> = $props()
  const styles = useNativeSelectStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().indicator, className] } as Record<string, unknown>)
</script>

<Box bind:ref {...boxProps} data-slot="indicator">
  {#if children}{@render children()}{:else}<Icon name="chevron-down" />{/if}
</Box>
