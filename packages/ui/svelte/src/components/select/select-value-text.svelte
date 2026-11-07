<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectValueTextProps = Select.ValueTextProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectValueTextProps = $props()
  const styles = useSelectStyles()
</script>

<Select.ValueText bind:ref {...props} data-slot="valueText" class={[!unstyled && styles().valueText, className]} />
