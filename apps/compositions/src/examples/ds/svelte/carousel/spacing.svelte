<script lang="ts">
  import { Carousel } from "@isbatak/svelte-ui/carousel"
  import { Center } from "@isbatak/svelte-ui/center"
  import { css } from "styled-system/css"
</script>

<Carousel.Root count={5} spacing="3rem" slidesPerPage={1.5} class={css({ maxW: "xl", mx: "auto" })}>
  <Carousel.ItemGroup>
    <Carousel.Item index={0}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">1</Center>
    </Carousel.Item>
    <Carousel.Item index={1}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">2</Center>
    </Carousel.Item>
    <Carousel.Item index={2}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">3</Center>
    </Carousel.Item>
    <Carousel.Item index={3}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">4</Center>
    </Carousel.Item>
    <Carousel.Item index={4}>
      <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">5</Center>
    </Carousel.Item>
  </Carousel.ItemGroup>
  <Carousel.Control class={css({ justifyContent: "center", gap: "4" })}>
    <Carousel.PrevTrigger />
    <Carousel.Indicators />
    <Carousel.NextTrigger />
  </Carousel.Control>
</Carousel.Root>
