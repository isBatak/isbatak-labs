<script module lang="ts">
  import { type CollectionItem, Listbox } from "@ark-ui/svelte/listbox"
  import { listbox, type ListboxVariantProps } from "@isbatak/panda-ds/recipes"

  export type ListboxRootProps<T extends CollectionItem = CollectionItem> = Listbox.RootProps<T> & ListboxVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends CollectionItem = CollectionItem">
  import { provideListboxStyles } from "./listbox-styles"

  let { value = $bindable(), unstyled, class: className, ...props }: ListboxRootProps<T> = $props()
  const [variantProps, localProps] = $derived(listbox.splitVariantProps(props))
  const styles = $derived(listbox(variantProps))
  provideListboxStyles(() => styles)
</script>

<Listbox.Root bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
