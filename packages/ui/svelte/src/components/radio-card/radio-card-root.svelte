<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"
  import { radioCard, type RadioCardVariantProps } from "@isbatak/panda-ds/recipes"

  export type RadioCardRootProps = RadioGroup.RootProps & RadioCardVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: RadioCardRootProps = $props()
  const [variantProps, localProps] = $derived(radioCard.splitVariantProps(props))
  const styles = $derived(radioCard(variantProps))
  provideRadioCardStyles(() => styles)
</script>

<RadioGroup.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
