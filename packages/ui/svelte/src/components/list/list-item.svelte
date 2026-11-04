<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type ListItemProps<T extends keyof SvelteHTMLElements = "li"> = BoxProps<T>
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'li'">
  import { Box } from "../box"
  import { useListStyles } from "./list-styles"

  let { ref = $bindable(), class: className, ...props }: ListItemProps<T> = $props()
  const styles = useListStyles()
  const boxProps = $derived({ ...props, class: [styles().item, className] } as Record<string, unknown>)
</script>

<Box as="li" bind:ref {...boxProps} />
