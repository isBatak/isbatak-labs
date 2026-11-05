<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioGroupItemTextProps = RadioGroup.ItemTextProps
</script>

<script lang="ts">
  import { useRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), class: className, ...props }: RadioGroupItemTextProps = $props()
  const styles = useRadioGroupStyles()
</script>

<RadioGroup.ItemText bind:ref {...props} data-slot="itemText" class={[styles().itemText, className]} />
