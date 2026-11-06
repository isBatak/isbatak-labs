<script module lang="ts">
  import { Tour } from "@ark-ui/svelte/tour"

  export type TourTitleProps = Tour.TitleProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTourStyles } from "./tour-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TourTitleProps = $props()
  const styles = useTourStyles()
</script>

<Tour.Title bind:ref {...props} data-slot="title" class={[!unstyled && styles().title, className]} />
