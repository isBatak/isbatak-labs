<script module lang="ts">
  import { type CollectionItem, Listbox } from "@ark-ui/svelte/listbox"
  import { listbox, type ListboxVariantProps } from "@isbatak/panda-ds/recipes"

  export type ListboxRootProviderProps<T extends CollectionItem = CollectionItem> = Listbox.RootProviderProps<T> & ListboxVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends CollectionItem = CollectionItem">
  import { provideListboxStyles } from "./listbox-styles"

  let { unstyled, class: className, ...props }: ListboxRootProviderProps<T> = $props()
  const [variantProps, localProps] = $derived(listbox.splitVariantProps(props))
  const styles = $derived(listbox(variantProps))
  provideListboxStyles(() => styles)
</script>

<Listbox.RootProvider {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
