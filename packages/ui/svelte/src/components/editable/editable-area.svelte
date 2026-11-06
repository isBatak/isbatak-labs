<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"

  export type EditableAreaProps = Editable.AreaProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditableAreaProps = $props()
  const styles = useEditableStyles()
</script>

<Editable.Area bind:ref {...props} data-slot="area" class={[!unstyled && styles().area, className]} />
