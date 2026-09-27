<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourTitleProps = Tour.TitleProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourTitleProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Title bind:ref {...props} data-slot="title" class={[styles().title, className]} />
