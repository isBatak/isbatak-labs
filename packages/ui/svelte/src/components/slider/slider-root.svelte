<script module lang="ts">
  import { Slider } from "@ark-ui/svelte/slider"
  import { slider, type SliderVariantProps } from "@isbatak/panda-ds/recipes"

  export type SliderRootProps = Slider.RootProps & SliderVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideSliderStyles } from "./slider-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: SliderRootProps = $props()
  const [variantProps, localProps] = $derived(slider.splitVariantProps(props))
  const styles = $derived(slider(variantProps))
  provideSliderStyles(() => styles)
</script>

<Slider.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
