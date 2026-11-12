<script module lang="ts">
  import type { DataListVariantProps } from "@isbatak/panda-ds/recipes"

  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type DataListRootProps<T extends keyof SvelteHTMLElements = "dl"> = BoxProps<T> & DataListVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'dl'">
  import { dataList } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideDataListStyles } from "./data-list-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: DataListRootProps<T> = $props()
  const [variantProps, rest] = $derived(dataList.splitVariantProps(props))
  const styles = $derived(dataList(variantProps))
  provideDataListStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box as="dl" bind:ref data-slot="root" {...boxProps} />
