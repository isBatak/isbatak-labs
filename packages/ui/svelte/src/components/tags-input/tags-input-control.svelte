<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputControlProps = TagsInput.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputControlProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
