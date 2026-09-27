<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectPositionerProps = Select.PositionerProps
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), class: className, ...props }: SelectPositionerProps = $props()
  const styles = useSelectStyles()
</script>

<Select.Positioner bind:ref {...props} data-slot="positioner" class={[styles().positioner, className]} />
