<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputInputProps = TagsInput.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputInputProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
