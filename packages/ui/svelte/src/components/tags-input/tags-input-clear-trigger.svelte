<script module lang="ts">
  import { TagsInput } from "@ark-ui/svelte/tags-input"

  export type TagsInputClearTriggerProps = TagsInput.ClearTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useTagsInputStyles } from "./tags-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: TagsInputClearTriggerProps = $props()
  const styles = useTagsInputStyles()
</script>

<TagsInput.ClearTrigger bind:ref {...props} data-slot="clearTrigger" class={[!unstyled && styles().clearTrigger, className]} />
