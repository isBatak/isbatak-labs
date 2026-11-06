<script lang="ts">
  import { PinInput } from "@isbatak/svelte-ui/pin-input"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="5">
  <PinInput.Root count={4} size="sm">
    <PinInput.HiddenInput />
    <PinInput.Label>size sm</PinInput.Label>
    <PinInput.Control>
      <PinInput.Input index={0} />
      <PinInput.Input index={1} />
      <PinInput.Input index={2} />
      <PinInput.Input index={3} />
    </PinInput.Control>
  </PinInput.Root>
  <PinInput.Root count={4} size="md">
    <PinInput.HiddenInput />
    <PinInput.Label>size md</PinInput.Label>
    <PinInput.Control>
      <PinInput.Input index={0} />
      <PinInput.Input index={1} />
      <PinInput.Input index={2} />
      <PinInput.Input index={3} />
    </PinInput.Control>
  </PinInput.Root>
  <PinInput.Root count={4} size="lg">
    <PinInput.HiddenInput />
    <PinInput.Label>size lg</PinInput.Label>
    <PinInput.Control>
      <PinInput.Input index={0} />
      <PinInput.Input index={1} />
      <PinInput.Input index={2} />
      <PinInput.Input index={3} />
    </PinInput.Control>
  </PinInput.Root>
</Stack>
