<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselIndicatorGroupProps = Carousel.IndicatorGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselIndicatorGroupProps = $props()
  const styles = useCarouselStyles()
</script>

<Carousel.IndicatorGroup bind:ref {...props} data-slot="indicatorGroup" class={[!unstyled && styles().indicatorGroup, className]} />
