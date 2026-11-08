<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"
  import { slider, type SliderVariantProps } from "@isbatak/panda-ds/recipes"

  export type SliderRootProviderProps = Slider.RootProviderProps & SliderVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SliderRootProviderProps = $props()
  const [variantProps, localProps] = $derived(slider.splitVariantProps(props))
  const styles = $derived(slider(variantProps))
  provideSliderStyles(() => styles)
</script>

<Slider.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
