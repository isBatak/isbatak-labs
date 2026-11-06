import { PinInput } from "@isbatak/react-ui/pin-input"

export function PinInputAlphanumericDemo() {
  return (
    <PinInput.Root count={4} type="alphanumeric">
      <PinInput.HiddenInput />
      <PinInput.Label>Invite code</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </PinInput.Control>
    </PinInput.Root>
  )
}
