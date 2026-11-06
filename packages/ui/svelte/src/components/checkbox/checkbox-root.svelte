<script module lang="ts">
  import { Checkbox } from "@ark-ui/svelte/checkbox"
  import { type CheckboxVariantProps, checkbox } from "@isbatak/panda-ds/recipes"

  export type CheckboxRootProps = Checkbox.RootProps & CheckboxVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideCheckboxStyles } from "./checkbox-styles"

  let { ref = $bindable(null), checked = $bindable(), unstyled, class: className, ...props }: CheckboxRootProps = $props()
  const [variantProps, localProps] = $derived(checkbox.splitVariantProps(props))
  const styles = $derived(checkbox(variantProps))
  provideCheckboxStyles(() => styles)
</script>

<Checkbox.Root bind:ref bind:checked  {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
