<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StatValueUnitProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useStatStyles } from "./stat-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: StatValueUnitProps<T> = $props()
  const styles = useStatStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().valueUnit, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="valueUnit" {...boxProps} />
