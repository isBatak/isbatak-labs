<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselAutoplayTriggerProps = Carousel.AutoplayTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCarouselStyles } from "./carousel-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CarouselAutoplayTriggerProps = $props()
  const styles = useCarouselStyles()
</script>

<Carousel.AutoplayTrigger bind:ref {...props} data-slot="autoplayTrigger" class={[!unstyled && styles().autoplayTrigger, className]} />
