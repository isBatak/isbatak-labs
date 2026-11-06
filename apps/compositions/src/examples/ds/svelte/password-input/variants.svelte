<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { PasswordInput } from "@isbatak/svelte-ui/password-input"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="5" w="full" maxW="xs">
  <PasswordInput.Root variant="outline">
    <PasswordInput.Label>variant outline</PasswordInput.Label>
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
  <PasswordInput.Root variant="subtle">
    <PasswordInput.Label>variant subtle</PasswordInput.Label>
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
  <PasswordInput.Root variant="flushed">
    <PasswordInput.Label>variant flushed</PasswordInput.Label>
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
