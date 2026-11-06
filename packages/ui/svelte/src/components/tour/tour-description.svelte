<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourDescriptionProps = Tour.DescriptionProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourDescriptionProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Description bind:ref {...props} data-slot="description" class={[!unstyled && styles().description, className]} />
