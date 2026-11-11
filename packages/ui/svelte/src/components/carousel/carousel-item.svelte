<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselItemProps = Carousel.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselItemProps = $props()
  const styles = useCarouselStyles()
</script>

<Carousel.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
