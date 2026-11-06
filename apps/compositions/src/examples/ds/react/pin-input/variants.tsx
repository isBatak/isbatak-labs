import { PinInput } from "@isbatak/react-ui/pin-input"
import { Stack } from "@isbatak/react-ui/stack"

export function PinInputVariantsDemo() {
  return (
    <Stack gap="5">
      <PinInput.Root count={4} variant="outline">
        <PinInput.HiddenInput />
        <PinInput.Label>variant outline</PinInput.Label>
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </PinInput.Control>
      </PinInput.Root>
      <PinInput.Root count={4} variant="subtle">
        <PinInput.HiddenInput />
        <PinInput.Label>variant subtle</PinInput.Label>
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </PinInput.Control>
      </PinInput.Root>
      <PinInput.Root count={4} variant="plain">
        <PinInput.HiddenInput />
        <PinInput.Label>variant plain</PinInput.Label>
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </PinInput.Control>
      </PinInput.Root>
      <PinInput.Root count={4} variant="flushed">
        <PinInput.HiddenInput />
        <PinInput.Label>variant flushed</PinInput.Label>
        <PinInput.Control>
          <PinInput.Input index={0} />
          <PinInput.Input index={1} />
          <PinInput.Input index={2} />
          <PinInput.Input index={3} />
        </PinInput.Control>
      </PinInput.Root>
    </Stack>
  )
}
