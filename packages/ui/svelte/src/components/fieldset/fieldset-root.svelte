<script module lang="ts">
  import { Fieldset } from "@ark-ui/svelte/fieldset"
  import { type FieldsetVariantProps, fieldset } from "@isbatak/panda-ds/recipes"

  export type FieldsetRootProps = Fieldset.RootProps & FieldsetVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideFieldsetStyles } from "./fieldset-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FieldsetRootProps = $props()
  const [variantProps, localProps] = $derived(fieldset.splitVariantProps(props))
  const styles = $derived(fieldset(variantProps))
  provideFieldsetStyles(() => styles)
</script>

<Fieldset.Root bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
