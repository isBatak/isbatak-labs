<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"

  export type EditableSubmitTriggerProps = Editable.SubmitTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditableSubmitTriggerProps = $props()
  const styles = useEditableStyles()
</script>

<Editable.SubmitTrigger bind:ref {...props} data-slot="submitTrigger" class={[!unstyled && styles().submitTrigger, className]} />
