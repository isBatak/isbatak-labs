<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandItemProps = Combobox.ItemProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CommandItemProps = $props()
  const styles = useCommandStyles()
</script>

<Combobox.Item bind:ref persistFocus {...props} data-slot="item" class={[!unstyled && styles().item, className]} />
