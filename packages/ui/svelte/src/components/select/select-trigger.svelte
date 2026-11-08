<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectTriggerProps = Select.TriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectTriggerProps = $props()
  const styles = useSelectStyles()
</script>

<Select.Trigger bind:ref {...props} data-slot="trigger" class={[!unstyled && styles().trigger, className]} />
