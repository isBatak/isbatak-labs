<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputItemPreviewProps = TagsInput.ItemPreviewProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputItemPreviewProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.ItemPreview bind:ref {...props} data-slot="itemPreview" class={[!unstyled && styles().itemPreview, className]} />
