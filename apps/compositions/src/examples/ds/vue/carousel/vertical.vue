<script setup lang="ts">
import { Carousel } from "@isbatak/vue-ui/carousel"
import { Center } from "@isbatak/vue-ui/center"
</script>

<template>
  <Carousel.Root :count="5" orientation="vertical" h="80" maxW="xl" mx="auto">
    <Carousel.ItemGroup flex="1">
      <Carousel.Item :index="0">
        <Center w="full" h="full" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">1</Center>
      </Carousel.Item>
      <Carousel.Item :index="1">
        <Center w="full" h="full" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">2</Center>
      </Carousel.Item>
      <Carousel.Item :index="2">
        <Center w="full" h="full" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">3</Center>
      </Carousel.Item>
      <Carousel.Item :index="3">
        <Center w="full" h="full" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">4</Center>
      </Carousel.Item>
      <Carousel.Item :index="4">
        <Center w="full" h="full" bg="bg.emphasized" borderRadius="l3" textStyle="4xl" fontWeight="semibold">5</Center>
      </Carousel.Item>
    </Carousel.ItemGroup>
    <Carousel.Control justifyContent="space-between" gap="4">
      <Carousel.PrevTrigger />
      <Carousel.Indicators />
      <Carousel.NextTrigger />
    </Carousel.Control>
  </Carousel.Root>
</template>
