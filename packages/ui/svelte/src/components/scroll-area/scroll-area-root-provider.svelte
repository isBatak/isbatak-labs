<script module lang="ts">
  import { ScrollArea } from "@ark-ui/svelte/scroll-area"
  import { scrollArea, type ScrollAreaVariantProps } from "@isbatak/panda-ds/recipes"

  export type ScrollAreaRootProviderProps = ScrollArea.RootProviderProps & ScrollAreaVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideScrollAreaStyles } from "./scroll-area-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ScrollAreaRootProviderProps = $props()
  const [variantProps, localProps] = $derived(scrollArea.splitVariantProps(props))
  const styles = $derived(scrollArea(variantProps))
  provideScrollAreaStyles(() => styles)
</script>

<ScrollArea.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
