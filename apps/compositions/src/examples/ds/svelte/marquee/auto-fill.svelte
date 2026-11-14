<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Marquee } from "@isbatak/svelte-ui/marquee"
  import { css } from "styled-system/css"
</script>

<Marquee.Root autoFill spacing="2rem" class={css({ maxW: "xl" })}>
  <Marquee.Viewport>
    <Marquee.Content>
      <Marquee.Item><Badge variant="outline" size="lg">🍎 Apple</Badge></Marquee.Item>
      <Marquee.Item><Badge variant="outline" size="lg">🍌 Banana</Badge></Marquee.Item>
      <Marquee.Item><Badge variant="outline" size="lg">🍒 Cherry</Badge></Marquee.Item>
    </Marquee.Content>
  </Marquee.Viewport>
</Marquee.Root>
