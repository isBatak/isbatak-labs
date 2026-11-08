<script module lang="ts">
  import { RatingGroup } from "@ark-ui/svelte/rating-group"
  import { ratingGroup, type RatingGroupVariantProps } from "@isbatak/panda-ds/recipes"

  export type RatingGroupRootProps = RatingGroup.RootProps & RatingGroupVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideRatingGroupStyles } from "./rating-group-styles"

  let { ref = $bindable(null), value = $bindable(), unstyled, class: className, ...props }: RatingGroupRootProps = $props()
  const [variantProps, localProps] = $derived(ratingGroup.splitVariantProps(props))
  const styles = $derived(ratingGroup(variantProps))
  provideRatingGroupStyles(() => styles)
</script>

<RatingGroup.Root bind:ref bind:value {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
