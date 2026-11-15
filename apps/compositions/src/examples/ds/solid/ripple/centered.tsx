import { Center } from "@isbatak/solid-ui/center"
import { Ripple } from "@isbatak/solid-ui/ripple"

export function RippleCenteredDemo() {
  return (
    <Ripple
      centered
      asChild={(props) => (
        <Center {...props()} w="64" h="32" bg="bg.emphasized" borderRadius="l3" userSelect="none">
          Always from the center
        </Center>
      )}
    />
  )
}
