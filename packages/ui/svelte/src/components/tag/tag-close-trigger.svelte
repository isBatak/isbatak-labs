<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TagCloseTriggerProps<T extends keyof SvelteHTMLElements = "button"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'button'">
  import { Box } from "../box"
  import { Icon } from "../icon"
  import { useTagStyles } from "./tag-styles"

  let { ref = $bindable(), unstyled, class: className, children, ...props }: TagCloseTriggerProps<T> = $props()
  const styles = useTagStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().closeTrigger, className] } as Record<string, unknown>)
</script>

<Box as="button" bind:ref type="button" aria-label="Close" data-slot="closeTrigger" {...boxProps}>
  {#if children}
    {@render children()}
  {:else}
    <Icon name="close" />
  {/if}
</Box>
