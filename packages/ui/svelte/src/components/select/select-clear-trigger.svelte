<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectClearTriggerProps = Select.ClearTriggerProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { Icon } from "../icon"
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, children, ...props }: SelectClearTriggerProps = $props()
  const styles = useSelectStyles()
</script>

<Select.ClearTrigger bind:ref aria-label="Clear selection" {...props} data-slot="clearTrigger" class={[!unstyled && styles().clearTrigger, className]}>
  {#if children}{@render children()}{:else}<Icon name="close" />{/if}
</Select.ClearTrigger>
