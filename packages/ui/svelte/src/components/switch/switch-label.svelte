<script module lang="ts">
  import { Switch } from "@ark-ui/svelte/switch"

  export type SwitchLabelProps = Switch.LabelProps & { unstyled?: boolean | undefined }
</script>

<script lang="ts">
  import { useSwitchStyles } from "./switch-styles"

  let { ref = $bindable(null), unstyled, class: className, ...props }: SwitchLabelProps = $props()
  const styles = useSwitchStyles()
</script>

<Switch.Label bind:ref {...props} data-slot="label" class={[!unstyled && styles().label, className]} />
