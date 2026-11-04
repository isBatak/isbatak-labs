import { AspectRatio } from "@isbatak/solid-ui/aspect-ratio"
import { Center } from "@isbatak/solid-ui/center"

export function AspectRatioResponsiveDemo() {
  return (
    <AspectRatio ratio={{ base: 1, md: 16 / 9 }} w="full" maxW="sm">
      <Center bg="bg.emphasized" borderRadius="l2">
        1 / 1, then 16 / 9 from md
      </Center>
    </AspectRatio>
  )
}
