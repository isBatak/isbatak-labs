<script module lang="ts">
  import { Editable } from "@ark-ui/svelte/editable"

  export type EditableLabelProps = Editable.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useEditableStyles } from "./editable-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: EditableLabelProps = $props()
  const styles = useEditableStyles()
</script>

<Editable.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
