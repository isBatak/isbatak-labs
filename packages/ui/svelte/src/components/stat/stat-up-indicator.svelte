<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type StatUpIndicatorProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { Icon } from "../icon"
  import { useStatStyles } from "./stat-styles"

  let { ref = $bindable(), unstyled, class: className, children, ...props }: StatUpIndicatorProps<T> = $props()
  const styles = useStatStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().indicator, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="indicator" data-type="up" {...boxProps}>
  {#if children}
    {@render children()}
  {:else}
    <Icon name="arrow-up" />
  {/if}
</Box>
