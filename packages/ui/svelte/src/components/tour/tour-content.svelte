<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourContentProps = Tour.ContentProps
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), class: className, ...props }: TourContentProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Content bind:ref {...props} data-slot="content" class={[styles().content, className]} />
