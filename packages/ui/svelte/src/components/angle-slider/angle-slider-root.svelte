<script module lang="ts">
  import { AngleSlider } from "@ark-ui/svelte/angle-slider"
  import { angleSlider, type AngleSliderVariantProps } from "@isbatak/panda-ds/recipes"

  export type AngleSliderRootProps = AngleSlider.RootProps & AngleSliderVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideAngleSliderStyles } from "./angle-slider-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: AngleSliderRootProps = $props()
  const [variantProps, localProps] = $derived(angleSlider.splitVariantProps(props))
  const styles = $derived(angleSlider(variantProps))
  provideAngleSliderStyles(() => styles)
</script>

<AngleSlider.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
