<script module lang="ts">
  import { DateInput } from "@ark-ui/svelte/date-input"

  export type DateInputLabelProps = DateInput.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDateInputStyles } from "./date-input-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DateInputLabelProps = $props()
  const styles = useDateInputStyles()
</script>

<DateInput.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
