import { Center } from "@isbatak/react-ui/center"
import { Ripple } from "@isbatak/react-ui/ripple"

export function RippleDemo() {
  return (
    <Ripple asChild>
      <Center w="64" h="32" bg="bg.emphasized" borderRadius="l3" userSelect="none">
        Click anywhere
      </Center>
    </Ripple>
  )
}
