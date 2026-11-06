<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { PasswordInput } from "@isbatak/svelte-ui/password-input"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"

  let visible = $state(false)
</script>

<Stack gap="3" w="full" maxW="xs">
  <PasswordInput.Root bind:visible>
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
  </PasswordInput.Root>
  <Text textStyle="sm" color="fg.muted">Password is {visible ? "visible" : "hidden"}</Text>
</Stack>
