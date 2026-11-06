<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"
  import { tagsInput, type TagsInputVariantProps } from "@isbatak/panda-ds/recipes"

  export type TagsInputRootProviderProps = TagsInput.RootProviderProps & TagsInputVariantProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { provideTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputRootProviderProps = $props()
  const [variantProps, localProps] = $derived(tagsInput.splitVariantProps(props))
  const styles = $derived(tagsInput(variantProps))
  provideTagsInputStyles(() => styles)
</script>

<TagsInput.RootProvider bind:ref {...localProps} data-slot="root" class={[!unstyled && styles.root, className]} />
