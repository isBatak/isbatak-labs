<script module lang="ts">
  import { RatingGroup } from "@ark-ui/svelte/rating-group"

  export type RatingGroupItemProps = RatingGroup.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRatingGroupStyles } from "./rating-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RatingGroupItemProps = $props()
  const styles = useRatingGroupStyles()
</script>

<RatingGroup.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
