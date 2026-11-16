<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandControlProps = Combobox.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CommandControlProps = $props()
  const styles = useCommandStyles()
</script>

<Combobox.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
