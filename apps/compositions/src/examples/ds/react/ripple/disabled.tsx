import { Center } from "@isbatak/react-ui/center"
import { Ripple } from "@isbatak/react-ui/ripple"

export function RippleDisabledDemo() {
  return (
    <Ripple asChild disabled>
      <Center w="64" h="32" bg="bg.emphasized" borderRadius="l3" userSelect="none">
        No ripple
      </Center>
    </Ripple>
  )
}
