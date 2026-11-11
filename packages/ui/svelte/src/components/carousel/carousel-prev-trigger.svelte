<script module lang="ts">
  import { Carousel } from "@ark-ui/svelte/carousel"

  export type CarouselPrevTriggerProps = Carousel.PrevTriggerProps & { unstyled?: boolean | undefined }
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
  }: CarouselPrevTriggerProps = $props()
  const styles = useCarouselStyles()
</script>

{#snippet iconButton(triggerProps: () => Record<string, unknown>)}
  <IconButton {...triggerProps()} variant="ghost" size="xs">
    <Icon name="chevron-left" />
  </IconButton>
{/snippet}

<Carousel.PrevTrigger
  bind:ref
  {...props}
  {...asChild ? { asChild } : children ? {} : { asChild: iconButton }}
  data-slot="prevTrigger"
  class={[!unstyled && styles().prevTrigger, className]}
>
  {@render children?.()}
</Carousel.PrevTrigger>
