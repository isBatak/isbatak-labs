<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioGroupItemProps = RadioGroup.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRadioGroupStyles } from "./radio-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RadioGroupItemProps = $props()
  const styles = useRadioGroupStyles()
</script>

<RadioGroup.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
