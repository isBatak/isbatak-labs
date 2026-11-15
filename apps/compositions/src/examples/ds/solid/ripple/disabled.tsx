import { Center } from "@isbatak/solid-ui/center"
import { Ripple } from "@isbatak/solid-ui/ripple"

export function RippleDisabledDemo() {
  return (
    <Ripple
      disabled
      asChild={(props) => (
        <Center {...props()} w="64" h="32" bg="bg.emphasized" borderRadius="l3" userSelect="none">
          No ripple
        </Center>
      )}
    />
  )
}
