<script module lang="ts">
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SidebarMenuItemTextDescriptionProps<T extends keyof SvelteHTMLElements = "span"> = BoxProps<T> & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'span'">
  import { Box } from "../box"
  import { useSidebarStyles } from "./sidebar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: SidebarMenuItemTextDescriptionProps<T> = $props()
  const styles = useSidebarStyles()
  const boxProps = $derived({ ...props, class: [!unstyled && styles().menuItemTextDescription, className] } as Record<string, unknown>)
</script>

<Box as="span" bind:ref data-slot="menuItemTextDescription" {...boxProps} />
