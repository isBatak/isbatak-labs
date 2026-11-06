<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"
  import { type RadioGroupVariantProps, radioGroup } from "@isbatak/panda-ds/recipes"

  export type RadioGroupRootProps = RadioGroup.RootProps & RadioGroupVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: RadioGroupRootProps = $props()
  const [variantProps, localProps] = $derived(radioGroup.splitVariantProps(props))
  const styles = $derived(radioGroup(variantProps))
  provideRadioGroupStyles(() => styles)
</script>

<RadioGroup.Root bind:ref bind:value  {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
