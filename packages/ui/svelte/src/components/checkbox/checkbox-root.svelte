<script module lang="ts">
  import { Checkbox } from "@ark-ui/svelte/checkbox"
  import { type CheckboxVariantProps, checkbox } from "@isbatak/panda-ds/recipes"

  export type CheckboxRootProps = Checkbox.RootProps & CheckboxVariantProps
</script>

<script lang="ts">
  import { provideCheckboxStyles } from "./checkbox-styles"

  let { ref = $bindable(null), checked = $bindable(), class: className, ...props }: CheckboxRootProps = $props()
  const [variantProps, localProps] = $derived(checkbox.splitVariantProps(props))
  const styles = $derived(checkbox(variantProps))
  provideCheckboxStyles(() => styles)
</script>

<Checkbox.Root bind:ref bind:checked  {...localProps} data-slot="root" class={[styles.root, className]} />
