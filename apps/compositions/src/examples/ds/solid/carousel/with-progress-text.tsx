import { Carousel } from "@isbatak/solid-ui/carousel"
import { Center } from "@isbatak/solid-ui/center"

export function CarouselWithProgressTextDemo() {
  return (
    <Carousel.Root count={5} slidesPerPage={1.6} spacing="2rem" maxW="xl" mx="auto">
      <Carousel.ItemGroup>
        <Carousel.Item index={0}>
          <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">
            1
          </Center>
        </Carousel.Item>
        <Carousel.Item index={1}>
          <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">
            2
          </Center>
        </Carousel.Item>
        <Carousel.Item index={2}>
          <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">
            3
          </Center>
        </Carousel.Item>
        <Carousel.Item index={3}>
          <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">
            4
          </Center>
        </Carousel.Item>
        <Carousel.Item index={4}>
          <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">
            5
          </Center>
        </Carousel.Item>
      </Carousel.ItemGroup>
      <Carousel.Control gap="4">
        <Carousel.PrevTrigger />
        <Carousel.ProgressText />
        <Carousel.NextTrigger />
      </Carousel.Control>
    </Carousel.Root>
  )
}
