<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectItemTextProps = Select.ItemTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectItemTextProps = $props()
  const styles = useSelectStyles()
</script>

<Select.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]} />
