<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselNextTriggerProps = Carousel.NextTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { IconButton } from "../button"
  import { Icon } from "../icon"
  import { useCarouselStyles } from "./carousel-styles"

  let {
    ref = $bindable(null),
    unstyled,
    class: className,
    children,
    asChild,
    ...props
  }: CarouselNextTriggerProps = $props()
  const styles = useCarouselStyles()
</script>

{#snippet iconButton(triggerProps: () => Record<string, unknown>)}
  <IconButton {...triggerProps()} variant="ghost" size="xs">
    <Icon name="chevron-right" />
  </IconButton>
{/snippet}

<Carousel.NextTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: iconButton }}
  data-slot="nextTrigger"
  class={[!unstyled && styles().nextTrigger, className]}
>
  {@render children?.()}
</Carousel.NextTrigger>
