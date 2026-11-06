<script module lang="ts">
  import { Switch } from "@ark-ui/svelte/switch"

  export type SwitchControlProps = Switch.ControlProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSwitchStyles } from "./switch-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SwitchControlProps = $props()
  const styles = useSwitchStyles()
</script>

<Switch.Control bind:ref {...props} data-slot="control" class={[!unstyled && styles().control, className]} />
