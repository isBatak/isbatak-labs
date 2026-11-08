<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectItemGroupProps = Select.ItemGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectItemGroupProps = $props()
  const styles = useSelectStyles()
</script>

<Select.ItemGroup bind:ref {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]} />
