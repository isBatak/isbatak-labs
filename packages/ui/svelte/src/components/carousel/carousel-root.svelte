<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"
  import { carousel, type CarouselVariantProps } from "@isbatak/panda-ds/recipes"

  export type CarouselRootProps = Carousel.RootProps & CarouselVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), page = $bindable(), unstyled, class: className, ...props }: CarouselRootProps = $props()
  const [variantProps, localProps] = $derived(carousel.splitVariantProps(props))
  const styles = $derived(carousel(variantProps))
  provideCarouselStyles(() => styles)
</script>

<Carousel.Root bind:ref bind:page {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
