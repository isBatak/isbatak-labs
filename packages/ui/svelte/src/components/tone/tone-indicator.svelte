<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ToneIndicatorProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & {
    unstyled?: boolean | undefined
  }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { Icon } from "../icon"
  import { useToneContext, useToneStyles } from "./tone-styles"

  let { ref = $bindable(), unstyled, class: className, children, ...props }: ToneIndicatorProps<T> = $props()
  const styles = useToneStyles()
  const value = useToneContext()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().indicator, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="indicator" data-tone={value()} {...boxProps}>
  {#if children}
    {@render children()}
  {:else if value() === "neutral"}
    <svg aria-hidden="true"></svg>
  {:else}
    <Icon name={value() === "positive" ? "caret-up-filled" : "caret-down-filled"} />
  {/if}
</Box>
