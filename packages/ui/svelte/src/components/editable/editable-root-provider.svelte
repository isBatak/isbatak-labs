<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"
  import { editable, type EditableVariantProps } from "@isbatak/panda-ds/recipes"

  export type EditableRootProviderProps = Editable.RootProviderProps & EditableVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditableRootProviderProps = $props()
  const [variantProps, localProps] = $derived(editable.splitVariantProps(props))
  const styles = $derived(editable(variantProps))
  provideEditableStyles(() => styles)
</script>

<Editable.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
