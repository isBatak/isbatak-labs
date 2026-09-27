<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioCardItemProps = RadioGroup.ItemProps
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), class: className, ...props }: RadioCardItemProps = $props()
  const styles = useRadioCardStyles()
</script>

<RadioGroup.Item bind:ref {...props} data-slot="item" class={[styles().item, className]} />
