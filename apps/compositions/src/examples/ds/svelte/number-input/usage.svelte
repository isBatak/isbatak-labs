<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { NumberInput } from "@isbatak/svelte-ui/number-input"
</script>

<Box maxW="xs" w="full">
  <NumberInput.Root defaultValue="10">
    <NumberInput.Control>
      <NumberInput.IncrementTrigger>
        <Icon name="chevron-up" />
      </NumberInput.IncrementTrigger>
      <NumberInput.DecrementTrigger>
        <Icon name="chevron-down" />
      </NumberInput.DecrementTrigger>
    </NumberInput.Control>
    <NumberInput.Input />
  </NumberInput.Root>
</Box>
