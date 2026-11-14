<script setup lang="ts">
import { Badge } from "@isbatak/vue-ui/badge"
import { Button, ButtonGroup } from "@isbatak/vue-ui/button"
import { Marquee, useMarquee } from "@isbatak/vue-ui/marquee"
import { Stack } from "@isbatak/vue-ui/stack"

const marquee = useMarquee()
</script>

<template>
  <Stack gap="4" maxW="xl">
    <Marquee.RootProvider :value="marquee">
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
    </Marquee.RootProvider>
    <ButtonGroup variant="outline" size="sm">
      <Button @click="marquee.pause()">Pause</Button>
      <Button @click="marquee.resume()">Resume</Button>
    </ButtonGroup>
  </Stack>
</template>
