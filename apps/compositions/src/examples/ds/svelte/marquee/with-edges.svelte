<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Marquee } from "@isbatak/svelte-ui/marquee"
  import { css } from "styled-system/css"
</script>

<Marquee.Root class={css({ maxW: "xl" })}>
  <Marquee.Edge side="start" />
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
  <Marquee.Edge side="end" />
</Marquee.Root>
