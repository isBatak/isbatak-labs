<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"

  export type EditableControlProps = Editable.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditableControlProps = $props()
  const styles = useEditableStyles()
</script>

<Editable.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
