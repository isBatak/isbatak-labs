<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectItemGroupLabelProps = Select.ItemGroupLabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectItemGroupLabelProps = $props()
  const styles = useSelectStyles()
</script>

<Select.ItemGroupLabel bind:ref {...props} data-slot="itemGroupLabel" class={[!unstyled && styles().itemGroupLabel, className]} />
