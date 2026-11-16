<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandItemGroupProps = Combobox.ItemGroupProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CommandItemGroupProps = $props()
  const styles = useCommandStyles()
</script>

<Combobox.ItemGroup bind:ref {...props} data-slot="itemGroup" class={[!unstyled && styles().itemGroup, className]} />
