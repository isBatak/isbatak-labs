import { AspectRatio } from "@isbatak/solid-ui/aspect-ratio"
import { Center } from "@isbatak/solid-ui/center"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={2} w="full" maxW="sm">
      <Center bg="bg.emphasized" borderRadius="l2">
        2 / 1
      </Center>
    </AspectRatio>
  )
}
