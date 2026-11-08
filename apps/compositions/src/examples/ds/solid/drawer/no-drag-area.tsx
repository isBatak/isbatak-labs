import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"

const swatch = css.raw({ flexShrink: "0", w: "28", h: "20", borderRadius: "l2" })

export function DrawerNoDragAreaDemo() {
  return (
    <Drawer.Root placement="bottom">
      <Drawer.Trigger asChild={(props) => <Button {...props()}>Pick a color</Button>} />
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
            <Drawer.Body display="flex" flexDirection="column" gap="4">
              <Drawer.Description>
                Scroll the swatches sideways. Drags that start on them scroll the row instead of moving the drawer.
              </Drawer.Description>
              <div data-no-drag class={css({ display: "flex", gap: "3", overflowX: "auto", pb: "2" })}>
                <div class={css(swatch, { bg: "red.solid" })} />
                <div class={css(swatch, { bg: "orange.solid" })} />
                <div class={css(swatch, { bg: "yellow.solid" })} />
                <div class={css(swatch, { bg: "green.solid" })} />
                <div class={css(swatch, { bg: "teal.solid" })} />
                <div class={css(swatch, { bg: "blue.solid" })} />
                <div class={css(swatch, { bg: "purple.solid" })} />
                <div class={css(swatch, { bg: "pink.solid" })} />
              </div>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} variant="outline">
                    Done
                  </Button>
                )}
              />
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
