<script module lang="ts">
  import { ScrollArea } from "@ark-ui/svelte/scroll-area"
  import { scrollArea, type ScrollAreaVariantProps } from "@isbatak/panda-ds/recipes"

  export type ScrollAreaRootProps = ScrollArea.RootProps & ScrollAreaVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideScrollAreaStyles } from "./scroll-area-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ScrollAreaRootProps = $props()
  const [variantProps, localProps] = $derived(scrollArea.splitVariantProps(props))
  const styles = $derived(scrollArea(variantProps))
  provideScrollAreaStyles(() => styles)
</script>

<ScrollArea.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
