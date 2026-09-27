<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioCardItemTextProps = RadioGroup.ItemTextProps
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), class: className, ...props }: RadioCardItemTextProps = $props()
  const styles = useRadioCardStyles()
</script>

<RadioGroup.ItemText bind:ref {...props} data-slot="itemText" class={[styles().itemText, className]} />
