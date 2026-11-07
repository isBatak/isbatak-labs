<script module lang="ts">
  import type { NativeSelectVariantProps } from "@isbatak/panda-ds/recipes"
  import type { SvelteHTMLElements } from "svelte/elements"

  import type { BoxProps } from "../box"

  export type NativeSelectRootProps<T extends keyof SvelteHTMLElements = "div"> = BoxProps<T> &
    NativeSelectVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends keyof SvelteHTMLElements = 'div'">
  import { nativeSelect } from "@isbatak/panda-ds/recipes"

  import { Box } from "../box"
  import { provideNativeSelectStyles } from "./native-select-styles"

  let { ref = $bindable(), unstyled, class: className, ...props }: NativeSelectRootProps<T> = $props()
  const [variantProps, rest] = $derived(nativeSelect.splitVariantProps(props))
  const styles = $derived(nativeSelect(variantProps))
  provideNativeSelectStyles(() => styles)
  const boxProps = $derived({ ...rest, class: [!unstyled && styles.root, className] } as Record<string, unknown>)
</script>

<Box bind:ref {...boxProps} data-slot="root" />
