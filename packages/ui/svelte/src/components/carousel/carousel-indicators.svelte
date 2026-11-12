<script module lang="ts">
  import type { CarouselIndicatorProps } from "./carousel-indicator.svelte"

  export type CarouselIndicatorsProps = Omit<CarouselIndicatorProps, "index">
</script>

<script lang="ts">
  import { useCarouselContext } from "@ark-ui/svelte/carousel"
  import CarouselIndicatorGroup from "./carousel-indicator-group.svelte"
  import CarouselIndicator from "./carousel-indicator.svelte"

  let props: CarouselIndicatorsProps = $props()
  const context = useCarouselContext()
</script>

<CarouselIndicatorGroup>
  {#each context().pageSnapPoints as _, index (index)}
    <CarouselIndicator {...props} {index} />
  {/each}
</CarouselIndicatorGroup>
