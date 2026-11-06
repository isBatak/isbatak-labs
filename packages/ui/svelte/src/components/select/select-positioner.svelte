<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectPositionerProps = Select.PositionerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectPositionerProps = $props()
  const styles = useSelectStyles()
</script>

<Select.Positioner bind:ref {...props} data-slot="positioner" class={[!unstyled && styles().positioner, className]} />
