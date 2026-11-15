<script module lang="ts">
  import { AngleSlider } from "@ark-ui/svelte/angle-slider"
  import { angleSlider, type AngleSliderVariantProps } from "@isbatak/panda-ds/recipes"

  export type AngleSliderRootProviderProps = AngleSlider.RootProviderProps &
    AngleSliderVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideAngleSliderStyles } from "./angle-slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: AngleSliderRootProviderProps = $props()
  const [variantProps, localProps] = $derived(angleSlider.splitVariantProps(props))
  const styles = $derived(angleSlider(variantProps))
  provideAngleSliderStyles(() => styles)
</script>

<AngleSlider.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
