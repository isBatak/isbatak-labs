<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { PasswordInput } from "@isbatak/svelte-ui/password-input"
</script>

<Box maxW="xs" w="full">
  <PasswordInput.Root autoComplete="new-password">
    <PasswordInput.Label>New password</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Choose a password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#snippet fallback()}<Icon name="view-off" />{/snippet}
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
</Box>
