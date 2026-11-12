<script setup lang="ts">
import { AspectRatio } from "@isbatak/vue-ui/aspect-ratio"
import { IconButton } from "@isbatak/vue-ui/button"
import { Carousel } from "@isbatak/vue-ui/carousel"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <Carousel.Root :count="5" maxW="2xl" mx="auto" gap="4">
    <Carousel.Control justifyContent="center" gap="4" w="full">
      <Carousel.PrevTrigger :asChild="true">
        <IconButton size="xs" variant="outline">
          <Icon name="chevron-left" />
        </IconButton>
      </Carousel.PrevTrigger>
      <Carousel.ItemGroup w="full">
        <Carousel.Item :index="0">
          <AspectRatio :ratio="16 / 9" borderRadius="l2" overflow="hidden">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200" alt="Mountain landscape" />
          </AspectRatio>
        </Carousel.Item>
        <Carousel.Item :index="1">
          <AspectRatio :ratio="16 / 9" borderRadius="l2" overflow="hidden">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200" alt="Forest path" />
          </AspectRatio>
        </Carousel.Item>
        <Carousel.Item :index="2">
          <AspectRatio :ratio="16 / 9" borderRadius="l2" overflow="hidden">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200" alt="Ocean waves" />
          </AspectRatio>
        </Carousel.Item>
        <Carousel.Item :index="3">
          <AspectRatio :ratio="16 / 9" borderRadius="l2" overflow="hidden">
            <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200" alt="Lake house" />
          </AspectRatio>
        </Carousel.Item>
        <Carousel.Item :index="4">
          <AspectRatio :ratio="16 / 9" borderRadius="l2" overflow="hidden">
            <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1200" alt="Sunset lake" />
          </AspectRatio>
        </Carousel.Item>
      </Carousel.ItemGroup>
      <Carousel.NextTrigger :asChild="true">
        <IconButton size="xs" variant="outline">
          <Icon name="chevron-right" />
        </IconButton>
      </Carousel.NextTrigger>
    </Carousel.Control>
    <Carousel.IndicatorGroup>
      <Carousel.Indicator
        :index="0"
        :unstyled="true"
        w="20"
        borderRadius="l1"
        overflow="hidden"
        cursor="button"
        :_current="{
          outlineStyle: 'solid',
          outlineWidth: '[2px]',
          outlineColor: 'colorPalette.solid',
          outlineOffset: '[2px]',
        }"
      >
        <AspectRatio :ratio="16 / 9">
          <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=320" alt="Mountain landscape" />
        </AspectRatio>
      </Carousel.Indicator>
      <Carousel.Indicator
        :index="1"
        :unstyled="true"
        w="20"
        borderRadius="l1"
        overflow="hidden"
        cursor="button"
        :_current="{
          outlineStyle: 'solid',
          outlineWidth: '[2px]',
          outlineColor: 'colorPalette.solid',
          outlineOffset: '[2px]',
        }"
      >
        <AspectRatio :ratio="16 / 9">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=320" alt="Forest path" />
        </AspectRatio>
      </Carousel.Indicator>
      <Carousel.Indicator
        :index="2"
        :unstyled="true"
        w="20"
        borderRadius="l1"
        overflow="hidden"
        cursor="button"
        :_current="{
          outlineStyle: 'solid',
          outlineWidth: '[2px]',
          outlineColor: 'colorPalette.solid',
          outlineOffset: '[2px]',
        }"
      >
        <AspectRatio :ratio="16 / 9">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=320" alt="Ocean waves" />
        </AspectRatio>
      </Carousel.Indicator>
      <Carousel.Indicator
        :index="3"
        :unstyled="true"
        w="20"
        borderRadius="l1"
        overflow="hidden"
        cursor="button"
        :_current="{
          outlineStyle: 'solid',
          outlineWidth: '[2px]',
          outlineColor: 'colorPalette.solid',
          outlineOffset: '[2px]',
        }"
      >
        <AspectRatio :ratio="16 / 9">
          <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=320" alt="Lake house" />
        </AspectRatio>
      </Carousel.Indicator>
      <Carousel.Indicator
        :index="4"
        :unstyled="true"
        w="20"
        borderRadius="l1"
        overflow="hidden"
        cursor="button"
        :_current="{
          outlineStyle: 'solid',
          outlineWidth: '[2px]',
          outlineColor: 'colorPalette.solid',
          outlineOffset: '[2px]',
        }"
      >
        <AspectRatio :ratio="16 / 9">
          <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=320" alt="Sunset lake" />
        </AspectRatio>
      </Carousel.Indicator>
    </Carousel.IndicatorGroup>
  </Carousel.Root>
</template>
