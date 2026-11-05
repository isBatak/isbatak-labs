<script lang="ts">
  import { Switch } from "@isbatak/svelte-ui/switch"
</script>

<Switch.Root defaultChecked>
  <Switch.HiddenInput />
  <Switch.Control>
    <Switch.Thumb />
  </Switch.Control>
  <Switch.Label>Email notifications</Switch.Label>
</Switch.Root>
