<script module lang="ts">
  import { RadioGroup } from "@ark-ui/svelte/radio-group"

  export type RadioCardItemTextProps = RadioGroup.ItemTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useRadioCardStyles } from "./radio-card-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: RadioCardItemTextProps = $props()
  const styles = useRadioCardStyles()
</script>

<RadioGroup.ItemText bind:ref {...props} data-slot="itemText" class={[!unstyled && styles().itemText, className]} />
