<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"
  import { carousel, type CarouselVariantProps } from "@isbatak/panda-ds/recipes"

  export type CarouselRootProviderProps = Carousel.RootProviderProps &
    CarouselVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselRootProviderProps = $props()
  const [variantProps, localProps] = $derived(carousel.splitVariantProps(props))
  const styles = $derived(carousel(variantProps))
  provideCarouselStyles(() => styles)
</script>

<Carousel.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
