<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StatDownIndicatorProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { Icon } from "../icon"
  import { useStatStyles } from "./stat-styles"

  let { ref = $bindable(), unstyled, class: className, children, ...props }: StatDownIndicatorProps<T> = $props()
  const styles = useStatStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().indicator, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="indicator" data-type="down" {...boxProps}>
  {#if children}
    {@render children()}
  {:else}
    <Icon name="arrow-down" />
  {/if}
</Box>
