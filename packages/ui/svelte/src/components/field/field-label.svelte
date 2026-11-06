<script module lang="ts">
  import { Field } from "@ark-ui/svelte/field"

  export type FieldLabelProps = Field.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useFieldStyles } from "./field-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: FieldLabelProps = $props()
  const styles = useFieldStyles()
</script>

<Field.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
