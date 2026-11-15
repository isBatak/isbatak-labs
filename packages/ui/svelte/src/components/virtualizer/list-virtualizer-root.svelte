<script module lang="ts">
  import { ListVirtualizer } from "@ark-ui/svelte/virtualizer"
  import { virtualizer, type VirtualizerVariantProps } from "@isbatak/panda-ds/recipes"

  export type ListVirtualizerRootProps = ListVirtualizer.RootProps &
    VirtualizerVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideVirtualizerStyles } from "./virtualizer-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ListVirtualizerRootProps = $props()
  const [variantProps, localProps] = $derived(virtualizer.splitVariantProps(props))
  const styles = $derived(virtualizer(variantProps))
  provideVirtualizerStyles(() => styles)
</script>

<ListVirtualizer.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
