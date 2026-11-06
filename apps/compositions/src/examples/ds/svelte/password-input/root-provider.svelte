<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { PasswordInput, usePasswordInput } from "@isbatak/svelte-ui/password-input"
  import { Stack } from "@isbatak/svelte-ui/stack"

  const id = $props.id()
  const passwordInput = usePasswordInput({ id })
</script>

<Stack gap="3" w="full" maxW="xs" alignItems="flex-start">
  <Button variant="outline" size="sm" onclick={() => passwordInput().toggleVisible()}>{passwordInput().visible ? "Hide" : "Show"} password</Button>
  <PasswordInput.RootProvider value={passwordInput}>
    <PasswordInput.Label>Password</PasswordInput.Label>
    <PasswordInput.Control>
      <PasswordInput.Input value="boring-but-safe" />
      <PasswordInput.VisibilityTrigger>
        <PasswordInput.Indicator>
          {#snippet fallback()}<Icon name="view-off" />{/snippet}
          <Icon name="view" />
        </PasswordInput.Indicator>
      </PasswordInput.VisibilityTrigger>
    </PasswordInput.Control>
  </PasswordInput.RootProvider>
</Stack>
