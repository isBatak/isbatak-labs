<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectLabelProps = Select.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectLabelProps = $props()
  const styles = useSelectStyles()
</script>

<Select.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
