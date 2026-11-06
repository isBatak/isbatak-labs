<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { PasswordInput } from "@isbatak/svelte-ui/password-input"
  import { field } from "@isbatak/panda-ds/recipes"

  const fieldClasses = field()
</script>

<Box maxW="xs" w="full">
  <PasswordInput.Root invalid>
      <PasswordInput.Label>Password</PasswordInput.Label>
      <PasswordInput.Control>
        <PasswordInput.Input value="short" />
        <PasswordInput.VisibilityTrigger>
          <PasswordInput.Indicator>
            {#snippet fallback()}<Icon name="view-off" />{/snippet}
            <Icon name="view" />
          </PasswordInput.Indicator>
        </PasswordInput.VisibilityTrigger>
      </PasswordInput.Control>
    <span class={fieldClasses.errorText}>Use at least 8 characters.</span>
  </PasswordInput.Root>
</Box>
