<script module lang="ts">
  import { WindowVirtualizer } from "@ark-ui/svelte/virtualizer"
  import { virtualizer, type VirtualizerVariantProps } from "@isbatak/panda-ds/recipes"

  export type WindowVirtualizerRootProps = WindowVirtualizer.RootProps &
    VirtualizerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: WindowVirtualizerRootProps = $props()
  const [variantProps, localProps] = $derived(virtualizer.splitVariantProps(props))
  const styles = $derived(virtualizer(variantProps))
  provideVirtualizerStyles(() => styles)
</script>

<WindowVirtualizer.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
