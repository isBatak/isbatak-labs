<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectItemProps = Select.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectItemProps = $props()
  const styles = useSelectStyles()
</script>

<Select.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
