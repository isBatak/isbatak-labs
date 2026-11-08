<script module lang="ts">
  import { DatePicker } from "@ark-ui/svelte/date-picker"

  export type DatePickerContentProps = DatePicker.ContentProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useDatePickerStyles } from "./date-picker-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: DatePickerContentProps = $props()
  const styles = useDatePickerStyles()
</script>

<DatePicker.Content bind:ref {...props} data-slot="content" class={[!unstyled && styles().content, className]} />
