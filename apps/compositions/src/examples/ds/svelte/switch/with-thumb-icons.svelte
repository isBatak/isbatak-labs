<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Switch } from "@isbatak/svelte-ui/switch"
</script>

<Switch.Root size="lg">
  <Switch.HiddenInput />
  <Switch.Control>
    <Switch.Thumb>
      <Switch.ThumbIndicator>
        <Icon name="moon" />
        {#snippet fallback()}<Icon name="sun" color="fg.muted" />{/snippet}
      </Switch.ThumbIndicator>
    </Switch.Thumb>
  </Switch.Control>
  <Switch.Label>Dark mode</Switch.Label>
</Switch.Root>
