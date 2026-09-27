<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectItemTextProps = Select.ItemTextProps
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), class: className, ...props }: SelectItemTextProps = $props()
  const styles = useSelectStyles()
</script>

<Select.ItemText bind:ref {...props} data-slot="itemText" class={[styles().itemText, className]} />
