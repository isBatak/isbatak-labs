<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"

  export type EditableCancelTriggerProps = Editable.CancelTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditableCancelTriggerProps = $props()
  const styles = useEditableStyles()
</script>

<Editable.CancelTrigger bind:ref {...props} data-slot="cancelTrigger" class={[!unstyled && styles().cancelTrigger, className]} />
