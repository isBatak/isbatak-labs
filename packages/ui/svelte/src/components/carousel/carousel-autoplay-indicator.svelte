<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselAutoplayIndicatorProps = Carousel.AutoplayIndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselAutoplayIndicatorProps = $props()
  const styles = useCarouselStyles()
</script>

<Carousel.AutoplayIndicator bind:ref {...props} data-slot="autoplayIndicator" class={[!unstyled && styles().autoplayIndicator, className]} />
