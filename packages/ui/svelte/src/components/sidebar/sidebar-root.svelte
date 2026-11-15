<script module lang="ts">
  import type { SidebarVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type SidebarRootProps<T extends keyof SvelteHTMLElements = "nav"> = BoxProps<T> & SidebarVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'nav'">
  import { sidebar } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideSidebarStyles } from "./sidebar-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: SidebarRootProps<T> = $props()
  const [variantProps, rest] = $derived(sidebar.splitVariantProps(props))
  const styles = $derived(sidebar(variantProps))
  provideSidebarStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="nav" bind:ref data-slot="root" {...boxProps} />
