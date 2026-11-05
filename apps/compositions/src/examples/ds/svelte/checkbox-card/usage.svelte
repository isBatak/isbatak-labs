<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { CheckboxCard } from "@isbatak/svelte-ui/checkbox-card"
</script>

<Box maxW="xs">
  <CheckboxCard.Root>
    <CheckboxCard.HiddenInput />
    <CheckboxCard.Control>
      <CheckboxCard.Content>
        <CheckboxCard.Label>Next.js</CheckboxCard.Label>
        <CheckboxCard.Description>Best for apps</CheckboxCard.Description>
      </CheckboxCard.Content>
      <CheckboxCard.Indicator />
    </CheckboxCard.Control>
  </CheckboxCard.Root>
</Box>
