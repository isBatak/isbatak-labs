<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselProgressTextProps = Carousel.ProgressTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselProgressTextProps = $props()
  const styles = useCarouselStyles()
</script>

<Carousel.ProgressText bind:ref {...props} data-slot="progressText" class={[!unstyled && styles().progressText, className]} />
