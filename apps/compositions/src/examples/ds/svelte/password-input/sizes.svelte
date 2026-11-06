<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { PasswordInput } from "@isbatak/svelte-ui/password-input"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="5" w="full" maxW="xs">
  <PasswordInput.Root size="xs">
    <PasswordInput.Label>size xs</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Enter your password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#snippet fallback()}<Icon name="view-off" />{/snippet}
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
  <PasswordInput.Root size="sm">
    <PasswordInput.Label>size sm</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Enter your password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#snippet fallback()}<Icon name="view-off" />{/snippet}
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
  <PasswordInput.Root size="md">
    <PasswordInput.Label>size md</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Enter your password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#snippet fallback()}<Icon name="view-off" />{/snippet}
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
  <PasswordInput.Root size="lg">
    <PasswordInput.Label>size lg</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input placeholder="Enter your password" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#snippet fallback()}<Icon name="view-off" />{/snippet}
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.Root>
</Stack>
