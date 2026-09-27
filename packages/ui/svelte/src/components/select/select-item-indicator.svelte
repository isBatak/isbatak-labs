<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectItemIndicatorProps = Select.ItemIndicatorProps
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), class: className, ...props }: SelectItemIndicatorProps = $props()
  const styles = useSelectStyles()
</script>

<Select.ItemIndicator bind:ref {...props} data-slot="itemIndicator" class={[styles().itemIndicator, className]} />
