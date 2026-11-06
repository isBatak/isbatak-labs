import { PinInput } from "@isbatak/react-ui/pin-input"

export function PinInputDemo() {
  return (
    <PinInput.Root count={4}>
      <PinInput.HiddenInput />
      <PinInput.Label>Verification code</PinInput.Label>
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </PinInput.Control>
    </PinInput.Root>
  )
}
