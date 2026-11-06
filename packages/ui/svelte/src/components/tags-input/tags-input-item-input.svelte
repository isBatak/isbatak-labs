<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputItemInputProps = TagsInput.ItemInputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputItemInputProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.ItemInput bind:ref {...props} data-slot="itemInput" class={[!unstyled && styles().itemInput, className]} />
