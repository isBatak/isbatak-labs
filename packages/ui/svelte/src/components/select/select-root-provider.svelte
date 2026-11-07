<script module lang="ts">
  import { type CollectionItem, Select } from "@ark-ui/svelte/select"
  import { select, type SelectVariantProps } from "@isbatak/panda-ds/recipes"

  export type SelectRootProviderProps<T extends CollectionItem = CollectionItem> = Select.RootProviderProps<T> &
    SelectVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts" generics="T extends CollectionItem = CollectionItem">
  import { provideSelectAlignItemWithTrigger, provideSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectRootProviderProps<T> = $props()
  const [variantProps, localProps] = $derived(select.splitVariantProps(props))
  const styles = $derived(select(variantProps))
  provideSelectStyles(() => styles)
  provideSelectAlignItemWithTrigger(() => false)
</script>

<Select.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
