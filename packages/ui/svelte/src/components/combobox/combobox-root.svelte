<script module lang="ts">
  import { type CollectionItem, Combobox } from "@ark-ui/svelte/combobox"
  import { combobox, type ComboboxVariantProps } from "@isbatak/panda-ds/recipes"

  export type ComboboxRootProps<T extends CollectionItem = CollectionItem> = Combobox.RootProps<T> &
    ComboboxVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends CollectionItem = CollectionItem">
  import { provideComboboxStyles } from "./combobox-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ComboboxRootProps<T> = $props()
  const [variantProps, localProps] = $derived(combobox.splitVariantProps(props))
  const styles = $derived(combobox(variantProps))
  provideComboboxStyles(() => styles)
</script>

<Combobox.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
