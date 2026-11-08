<script module lang="ts">
  import { RatingGroup } from "@ark-ui/svelte/rating-group"

  export type RatingGroupControlProps = RatingGroup.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRatingGroupStyles } from "./rating-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RatingGroupControlProps = $props()
  const styles = useRatingGroupStyles()
</script>

<RatingGroup.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
