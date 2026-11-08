<script module lang="ts">
  import { DateInput } from "@ark-ui/svelte/date-input"

  export type DateInputControlProps = DateInput.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDateInputStyles } from "./date-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DateInputControlProps = $props()
  const styles = useDateInputStyles()
</script>

<DateInput.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
