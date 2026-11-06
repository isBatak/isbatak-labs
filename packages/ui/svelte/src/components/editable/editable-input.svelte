<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"

  export type EditableInputProps = Editable.InputProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditableInputProps = $props()
  const styles = useEditableStyles()
</script>

<Editable.Input bind:ref {...props} data-slot="input" class={[!unstyled && styles().input, className]} />
