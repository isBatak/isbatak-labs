<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Marquee } from "@isbatak/vue-ui/marquee"
</script>

<template>
  <Marquee.Root :pauseOnInteraction="true" maxW="xl">
    <Marquee.Viewport>
      <Marquee.Content>
        <Marquee.Item><Badge variant="outline" size="lg">🍎 Apple</Badge></Marquee.Item>
        <Marquee.Item><Badge variant="outline" size="lg">🍌 Banana</Badge></Marquee.Item>
        <Marquee.Item><Badge variant="outline" size="lg">🍒 Cherry</Badge></Marquee.Item>
        <Marquee.Item><Badge variant="outline" size="lg">🍇 Grape</Badge></Marquee.Item>
        <Marquee.Item><Badge variant="outline" size="lg">🍉 Watermelon</Badge></Marquee.Item>
        <Marquee.Item><Badge variant="outline" size="lg">🍓 Strawberry</Badge></Marquee.Item>
      </Marquee.Content>
    </Marquee.Viewport>
  </Marquee.Root>
</template>
