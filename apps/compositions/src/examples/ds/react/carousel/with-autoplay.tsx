import { IconButton } from "@isbatak/react-ui/button"
import { Carousel } from "@isbatak/react-ui/carousel"
import { Center } from "@isbatak/react-ui/center"
import { Icon } from "@isbatak/react-ui/icon"

export function CarouselWithAutoplayDemo() {
  return (
    <Carousel.Root count={5} autoPlay={{ delay: 2000 }} maxW="xl" mx="auto">
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
      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger />
        <Carousel.AutoplayTrigger asChild>
          <IconButton aria-label="Toggle autoplay" size="xs" variant="ghost">
            <Carousel.AutoplayIndicator fallback={<Icon name="play" />}>
              <Icon name="pause" />
            </Carousel.AutoplayIndicator>
          </IconButton>
        </Carousel.AutoplayTrigger>
        <Carousel.NextTrigger />
      </Carousel.Control>
    </Carousel.Root>
  )
}
