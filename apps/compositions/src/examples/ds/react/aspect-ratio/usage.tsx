import { AspectRatio } from "@isbatak/react-ui/aspect-ratio"
import { Center } from "@isbatak/react-ui/center"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={2} w="full" maxW="sm">
      <Center bg="bg.emphasized" borderRadius="l2">
        2 / 1
      </Center>
    </AspectRatio>
  )
}
