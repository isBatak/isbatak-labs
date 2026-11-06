<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioGroupItemTextProps = RadioGroup.ItemTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RadioGroupItemTextProps = $props()
  const styles = useRadioGroupStyles()
</script>

<RadioGroup.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]} />
