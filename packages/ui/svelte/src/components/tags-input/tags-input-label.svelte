<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputLabelProps = TagsInput.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputLabelProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
