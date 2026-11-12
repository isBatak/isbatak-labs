<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselControlProps = Carousel.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselControlProps = $props()
  const styles = useCarouselStyles()
</script>

<Carousel.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
