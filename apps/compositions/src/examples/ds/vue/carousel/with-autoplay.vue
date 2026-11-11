<script setup lang="ts">
import { IconButton } from "@isbatak/vue-ui/button"
import { Carousel } from "@isbatak/vue-ui/carousel"
import { Center } from "@isbatak/vue-ui/center"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Carousel.Root :count="5" :autoPlay="{ delay: 2000 }" maxW="xl" mx="auto">
    <Carousel.ItemGroup>
      <Carousel.Item :index="0">
        <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">1</Center>
      </Carousel.Item>
      <Carousel.Item :index="1">
        <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">2</Center>
      </Carousel.Item>
      <Carousel.Item :index="2">
        <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">3</Center>
      </Carousel.Item>
      <Carousel.Item :index="3">
        <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">4</Center>
      </Carousel.Item>
      <Carousel.Item :index="4">
        <Center w="full" h="72" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">5</Center>
      </Carousel.Item>
    </Carousel.ItemGroup>
    <Carousel.Control justifyContent="center" gap="4">
      <Carousel.PrevTrigger />
      <Carousel.AutoplayTrigger :asChild="true">
        <IconButton aria-label="Toggle autoplay" size="xs" variant="ghost">
          <Carousel.AutoplayIndicator>
            <Icon name="pause" />
            <template #fallback>
              <Icon name="play" />
            </template>
          </Carousel.AutoplayIndicator>
        </IconButton>
      </Carousel.AutoplayTrigger>
      <Carousel.NextTrigger />
    </Carousel.Control>
  </Carousel.Root>
</template>
