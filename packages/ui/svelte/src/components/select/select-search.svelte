<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SelectSearchProps<T extends keyof SvelteHTMLElements = "input"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'input'">
  import { Box } from "../box"
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: SelectSearchProps<T> = $props()
  const styles = useSelectStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().search, className] } as Record<string, unknown>)
</script>

<Box as="input" bind:ref type="search" autocomplete="off" {...boxProps} data-slot="search" />
