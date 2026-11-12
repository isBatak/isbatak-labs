<script module lang="ts">
  import type { GridTableVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type GridTableRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> &
    GridTableVariantProps & { unstyled?: boolean | undefined; columns?: string | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { gridTable } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideGridTableStyles } from "./grid-table-styles"

  let {
    ref = $bindable(),
    unstyled,
    columns = "repeat(auto-fit, minmax(10rem, 1fr))",
    class: className,
    style,
    ...props
  }: GridTableRootProps<T> = $props()
  const [variantProps, rest] = $derived(gridTable.splitVariantProps(props))
  const styles = $derived(gridTable(variantProps))
  provideGridTableStyles(() => styles)
  const boxProps = $derived({
    ...rest,
    style: `--grid-template-columns: ${columns};${style ?? ""}`,
    class: [!unstyled && styles.root, className],
  } as Record<string, unknown>)
</script>

<Box as="div" bind:ref data-slot="root" role="table" {...boxProps} />
