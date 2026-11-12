<script setup lang="ts">
import { Carousel } from "@isbatak/vue-ui/carousel"
import { Center } from "@isbatak/vue-ui/center"
</script>

<template>
  <Carousel.Root :count="5" :autoSize="true" spacing="0.5rem" maxW="xl" mx="auto">
    <Carousel.Control gap="4">
      <Carousel.PrevTrigger />
      <Carousel.NextTrigger />
    </Carousel.Control>
    <Carousel.ItemGroup>
      <Carousel.Item :index="0" snapAlign="center" w="auto">
        <Center w="32" h="24" bg="bg.emphasized" borderRadius="l2" textStyle="sm">Small</Center>
      </Carousel.Item>
      <Carousel.Item :index="1" snapAlign="center" w="auto">
        <Center w="48" h="24" bg="bg.emphasized" borderRadius="l2" textStyle="sm">Medium size</Center>
      </Carousel.Item>
      <Carousel.Item :index="2" snapAlign="center" w="auto">
        <Center w="20" h="24" bg="bg.emphasized" borderRadius="l2" textStyle="sm">XS</Center>
      </Carousel.Item>
      <Carousel.Item :index="3" snapAlign="center" w="auto">
        <Center w="64" h="24" bg="bg.emphasized" borderRadius="l2" textStyle="sm">Large content here</Center>
      </Carousel.Item>
      <Carousel.Item :index="4" snapAlign="center" w="auto">
        <Center w="40" h="24" bg="bg.emphasized" borderRadius="l2" textStyle="sm">Regular</Center>
      </Carousel.Item>
    </Carousel.ItemGroup>
  </Carousel.Root>
</template>
