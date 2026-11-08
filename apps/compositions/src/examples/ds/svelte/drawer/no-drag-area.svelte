<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { css } from "styled-system/css"

  const swatch = css.raw({ flexShrink: "0", w: "28", h: "20", borderRadius: "l2" })
</script>

<Drawer.Root placement="bottom">
  <Drawer.Trigger>
    {#snippet asChild(props)}
      <Button {...props()}>Pick a color</Button>
    {/snippet}
  </Drawer.Trigger>
  <Portal>
    <Drawer.Backdrop />
    <Drawer.Positioner>
      <Drawer.Content>
        <Drawer.Grabber>
          <Drawer.GrabberIndicator />
        </Drawer.Grabber>
        <Drawer.Header>
          <Drawer.Title>Pick a color</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body class={css({ display: "flex", flexDirection: "column", gap: "4" })}>
          <Drawer.Description>
            Scroll the swatches sideways. Drags that start on them scroll the row instead of moving the drawer.
          </Drawer.Description>
          <div data-no-drag class={css({ display: "flex", gap: "3", overflowX: "auto", pb: "2" })}>
            <div class={css(swatch, { bg: "red.solid" })}></div>
            <div class={css(swatch, { bg: "orange.solid" })}></div>
            <div class={css(swatch, { bg: "yellow.solid" })}></div>
            <div class={css(swatch, { bg: "green.solid" })}></div>
            <div class={css(swatch, { bg: "teal.solid" })}></div>
            <div class={css(swatch, { bg: "blue.solid" })}></div>
            <div class={css(swatch, { bg: "purple.solid" })}></div>
            <div class={css(swatch, { bg: "pink.solid" })}></div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Drawer.ActionTrigger>
            {#snippet asChild(props)}
              <Button {...props()} variant="outline">Done</Button>
            {/snippet}
          </Drawer.ActionTrigger>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer.Positioner>
  </Portal>
</Drawer.Root>
