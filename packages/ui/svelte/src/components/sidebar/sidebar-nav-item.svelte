<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SidebarNavItemProps<T extends keyof SvelteHTMLElements = "a"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'a'">
  import { Box } from "../box"
  import { useSidebarStyles } from "./sidebar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: SidebarNavItemProps<T> = $props()
  const styles = useSidebarStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().navItem, className] } as Record<string, unknown>)
</script>

<Box as="a" bind:ref data-slot="navItem" {...boxProps} />
