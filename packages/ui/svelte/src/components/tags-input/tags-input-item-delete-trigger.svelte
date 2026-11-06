<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputItemDeleteTriggerProps = TagsInput.ItemDeleteTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputItemDeleteTriggerProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.ItemDeleteTrigger bind:ref {...props} data-slot="itemDeleteTrigger" class={[!unstyled && styles().itemDeleteTrigger, className]} />
