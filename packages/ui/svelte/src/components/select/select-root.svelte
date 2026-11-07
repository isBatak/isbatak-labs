<script module lang="ts">
  import { type CollectionItem, Select } from "@ark-ui/svelte/select"
  import { select, type SelectVariantProps } from "@isbatak/panda-ds/recipes"

  export type SelectRootProps<T extends CollectionItem = CollectionItem> = Select.RootProps<T> &
    SelectVariantProps & { unstyled?: boolean | undefined; disableAnchorTracking?: boolean | undefined }
</script>

<script lang="ts" generics="T extends CollectionItem = CollectionItem">
  import { provideSelectAlignItemWithTrigger, provideSelectStyles } from "./select-styles"

  const untrackedAnchorListeners = {
    ancestorScroll: true,
    ancestorResize: true,
    elementResize: false,
    layoutShift: false,
  }

  let {
    ref = $bindable(null),
    unstyled,
    class: className,
    alignItemWithTrigger = false,
    disableAnchorTracking = false,
    positioning,
    ...props
  }: SelectRootProps<T> = $props()
  const [variantProps, localProps] = $derived(select.splitVariantProps(props))
  const styles = $derived(select(variantProps))
  provideSelectStyles(() => styles)
  provideSelectAlignItemWithTrigger(() => alignItemWithTrigger)
</script>

<Select.Root
  bind:ref
  {alignItemWithTrigger}
  positioning={{ sameWidth: true, ...positioning, ...(disableAnchorTracking && { listeners: untrackedAnchorListeners }) }}
  {...localProps}
  data-slot="root"
  class={[!unstyled && styles.root, className]}
/>
