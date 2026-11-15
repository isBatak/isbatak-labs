<script module lang="ts">
  import { ToggleGroup } from "@ark-ui/svelte/toggle-group"

  export type ToggleGroupItemProps = ToggleGroup.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useToggleGroupStyles } from "./toggle-group-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: ToggleGroupItemProps = $props()
  const styles = useToggleGroupStyles()
</script>

<ToggleGroup.Item bind:ref {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
