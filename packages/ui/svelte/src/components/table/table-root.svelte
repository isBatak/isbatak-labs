<script module lang="ts">
  import type { TableVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type TableRootProps<T extends keyof SvelteHTMLElements = "table"> = BoxProps<T> & TableVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'table'">
  import { table } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideTableStyles } from "./table-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: TableRootProps<T> = $props()
  const [variantProps, rest] = $derived(table.splitVariantProps(props))
  const styles = $derived(table(variantProps))
  provideTableStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="table" bind:ref data-slot="root" {...boxProps} />
