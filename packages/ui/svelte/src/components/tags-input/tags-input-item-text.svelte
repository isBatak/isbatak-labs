<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputItemTextProps = TagsInput.ItemTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputItemTextProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]} />
