<script lang="ts">
  import { PinInput } from "@isbatak/svelte-ui/pin-input"
</script>

<PinInput.Root count={4} mask>
  <PinInput.HiddenInput />
  <PinInput.Label>PIN</PinInput.Label>
  <PinInput.Control>
    <PinInput.Input index={0} />
    <PinInput.Input index={1} />
    <PinInput.Input index={2} />
    <PinInput.Input index={3} />
  </PinInput.Control>
</PinInput.Root>
