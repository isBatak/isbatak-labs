<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"

  export type EditableEditTriggerProps = Editable.EditTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditableEditTriggerProps = $props()
  const styles = useEditableStyles()
</script>

<Editable.EditTrigger bind:ref {...props} data-slot="editTrigger" class={[!unstyled && styles().editTrigger, className]} />
