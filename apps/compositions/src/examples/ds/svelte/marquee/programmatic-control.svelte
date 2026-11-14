<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { Button, ButtonGroup } from "@isbatak/svelte-ui/button"
  import { Marquee, useMarquee } from "@isbatak/svelte-ui/marquee"
  import { Stack } from "@isbatak/svelte-ui/stack"

  const id = $props.id()
  const marquee = useMarquee({ id })
</script>

<Stack gap="4" maxW="xl">
  <Marquee.RootProvider value={marquee}>
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
    <Button onclick={() => marquee().pause()}>Pause</Button>
    <Button onclick={() => marquee().resume()}>Resume</Button>
  </ButtonGroup>
</Stack>
