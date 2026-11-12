<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselItemGroupProps = Carousel.ItemGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselItemGroupProps = $props()
  const styles = useCarouselStyles()
</script>

<Carousel.ItemGroup bind:ref {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]} />
