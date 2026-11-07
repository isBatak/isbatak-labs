<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectIndicatorProps = Select.IndicatorProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: SelectIndicatorProps = $props()
  const styles = useSelectStyles()
</script>

<Select.Indicator bind:ref {...props} data-slot="indicator" class={[!unstyled && styles().indicator, className]}>
  {#if children}{@render children()}{:else}<Icon name="chevron-down" />{/if}
</Select.Indicator>
