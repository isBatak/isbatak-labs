<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"

  export type EditablePreviewProps = Editable.PreviewProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditablePreviewProps = $props()
  const styles = useEditableStyles()
</script>

<Editable.Preview bind:ref {...props} data-slot="preview" class={[!unstyled && styles().preview, className]} />
