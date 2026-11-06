<script module lang="ts">
  import { Field } from "@ark-ui/svelte/field"
  import { type FieldVariantProps, field } from "@isbatak/panda-ds/recipes"

  export type FieldRootProps = Field.RootProps & FieldVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideFieldStyles } from "./field-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FieldRootProps = $props()
  const [variantProps, localProps] = $derived(field.splitVariantProps(props))
  const styles = $derived(field(variantProps))
  provideFieldStyles(() => styles)
</script>

<Field.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
