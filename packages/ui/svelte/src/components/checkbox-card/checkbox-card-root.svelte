<script module lang="ts">
  import { Checkbox } from "@ark-ui/svelte/checkbox"
  import { type CheckboxCardVariantProps, checkboxCard } from "@isbatak/panda-ds/recipes"

  export type CheckboxCardRootProps = Checkbox.RootProps & CheckboxCardVariantProps
</script>

<script lang="ts">
  import { provideCheckboxCardStyles } from "./checkbox-card-styles"

  let { ref = $bindable(null), checked = $bindable(), class: className, ...props }: CheckboxCardRootProps = $props()
  const [variantProps, localProps] = $derived(checkboxCard.splitVariantProps(props))
  const styles = $derived(checkboxCard(variantProps))
  provideCheckboxCardStyles(() => styles)
</script>

<Checkbox.Root bind:ref bind:checked  {...localProps} data-slot="root" class={[styles.root, className]} />
