<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselIndicatorProps = Carousel.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselIndicatorProps = $props()
  const styles = useCarouselStyles()
</script>

<Carousel.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]} />
