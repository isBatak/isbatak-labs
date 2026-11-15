<script module lang="ts">
  import { GridVirtualizer } from "@ark-ui/svelte/virtualizer"
  import { virtualizer, type VirtualizerVariantProps } from "@isbatak/panda-ds/recipes"

  export type GridVirtualizerRootProps = GridVirtualizer.RootProps &
    VirtualizerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: GridVirtualizerRootProps = $props()
  const [variantProps, localProps] = $derived(virtualizer.splitVariantProps(props))
  const styles = $derived(virtualizer(variantProps))
  provideVirtualizerStyles(() => styles)
</script>

<GridVirtualizer.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
