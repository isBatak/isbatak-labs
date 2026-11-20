<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandItemGroupLabelProps = Combobox.ItemGroupLabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CommandItemGroupLabelProps = $props()
  const styles = useCommandStyles()
</script>

<Combobox.ItemGroupLabel bind:ref {...props} data-slot="itemGroupLabel" class={[!unstyled && styles().itemGroupLabel, className]} />
