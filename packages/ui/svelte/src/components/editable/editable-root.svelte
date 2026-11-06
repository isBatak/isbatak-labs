<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"
  import { editable, type EditableVariantProps } from "@isbatak/panda-ds/recipes"

  export type EditableRootProps = Editable.RootProps & EditableVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: EditableRootProps = $props()
  const [variantProps, localProps] = $derived(editable.splitVariantProps(props))
  const styles = $derived(editable(variantProps))
  provideEditableStyles(() => styles)
</script>

<Editable.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
