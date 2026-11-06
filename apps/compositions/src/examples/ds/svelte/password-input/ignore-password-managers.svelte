<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { PasswordInput } from "@isbatak/svelte-ui/password-input"
</script>

<Box maxW="xs" w="full">
  <PasswordInput.Root ignorePasswordManagers>
    <PasswordInput.Label>API key</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Paste your API key" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#snippet fallback()}<Icon name="view-off" />{/snippet}
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
</Box>
