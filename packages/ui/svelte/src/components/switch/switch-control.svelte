<script module lang="ts">
  import { Switch } from "@ark-ui/svelte/switch"

  export type SwitchControlProps = Switch.ControlProps
</script>

<script lang="ts">
  import { useSwitchStyles } from "./switch-styles"

  let { ref = $bindable(null), class: className, ...props }: SwitchControlProps = $props()
  const styles = useSwitchStyles()
</script>

<Switch.Control bind:ref {...props} data-slot="control" class={[styles().control, className]} />
