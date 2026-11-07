<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectControlProps = Select.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectControlProps = $props()
  const styles = useSelectStyles()
</script>

<Select.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
