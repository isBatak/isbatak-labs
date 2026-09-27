<script module lang="ts">
  import { Tour, type TourRootProps as ArkTourRootProps } from "@ark-ui/svelte/tour"
  import { tour, type TourVariantProps } from "@isbatak/panda-ds/recipes"

  export type TourRootProps = ArkTourRootProps & TourVariantProps
</script>

<script lang="ts">
  import { provideTourStyles } from "./tour-styles"

  let { ...props }: TourRootProps = $props()
  const [variantProps, localProps] = $derived(tour.splitVariantProps(props))
  const styles = $derived(tour(variantProps))
  provideTourStyles(() => styles)
</script>

<Tour.Root {...localProps} />
