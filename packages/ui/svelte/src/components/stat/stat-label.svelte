<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StatLabelProps<T extends keyof SvelteHTMLElements = "dt"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'dt'">
  import { Box } from "../box"
  import { useStatStyles } from "./stat-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: StatLabelProps<T> = $props()
  const styles = useStatStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().label, className] } as Record<string, unknown>)
</script>

<Box as="dt" bind:ref data-slot="label" {...boxProps} />
