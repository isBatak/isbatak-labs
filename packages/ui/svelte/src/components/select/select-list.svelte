<script module lang="ts">
  import { Select } from "@ark-ui/svelte/select"

  export type SelectListProps = Select.ListProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSelectStyles } from "./select-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SelectListProps = $props()
  const styles = useSelectStyles()
</script>

<Select.List bind:ref {...props} data-slot="list" class={[!unstyled && styles().list, className]} />
