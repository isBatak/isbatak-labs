<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputItemProps = TagsInput.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputItemProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
