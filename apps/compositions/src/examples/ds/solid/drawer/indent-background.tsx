import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"

export function DrawerIndentBackgroundDemo() {
  return (
    <Drawer.Stack>
      <div
        class={css({
          position: "relative",
          w: "full",
          h: "72",
          overflow: "hidden",
          borderRadius: "l3",
          borderWidth: "1px",
        })}
      >
        <Drawer.IndentBackground />
        <Drawer.Indent
          minH="0"
          h="full"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="4"
          p="6"
        >
          <p class={css({ color: "fg.muted", textAlign: "center" })}>This box stands in for your page.</p>
          <Drawer.Root placement="bottom">
            <Drawer.Trigger asChild={(props) => <Button {...props()}>Open drawer</Button>} />
            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.Grabber>
                    <Drawer.GrabberIndicator />
                  </Drawer.Grabber>
                  <Drawer.Header>
                    <Drawer.Title>Indented page</Drawer.Title>
                  </Drawer.Header>
                  <Drawer.Body>
                    <Drawer.Description>
                      The page behind shrinks back while this drawer is open, and grows again as you swipe it away.
                    </Drawer.Description>
                  </Drawer.Body>
                  <Drawer.Footer>
                    <Drawer.ActionTrigger
                      asChild={(props) => (
                        <Button {...props()} variant="outline">
                          Close
                        </Button>
                      )}
                    />
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Drawer.Indent>
      </div>
    </Drawer.Stack>
  )
}
