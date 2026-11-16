<script module lang="ts">
  import { Combobox } from "@ark-ui/svelte/combobox"

  export type CommandLabelProps = Combobox.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useCommandStyles } from "./command-context"

  let { ref = $bindable(null), unstyled, class: className, ...props }: CommandLabelProps = $props()
  const styles = useCommandStyles()
</script>

<Combobox.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
