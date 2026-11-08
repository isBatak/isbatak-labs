<script module lang="ts">
  import { RatingGroup } from "@ark-ui/svelte/rating-group"
  import { ratingGroup, type RatingGroupVariantProps } from "@isbatak/panda-ds/recipes"

  export type RatingGroupRootProviderProps = RatingGroup.RootProviderProps & RatingGroupVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideRatingGroupStyles } from "./rating-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RatingGroupRootProviderProps = $props()
  const [variantProps, localProps] = $derived(ratingGroup.splitVariantProps(props))
  const styles = $derived(ratingGroup(variantProps))
  provideRatingGroupStyles(() => styles)
</script>

<RatingGroup.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
