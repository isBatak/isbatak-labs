<script lang="ts">
  import { Portal } from "@ark-ui/svelte/portal"
  import { Button } from "@isbatak/svelte-ui/button"
  import { Drawer } from "@isbatak/svelte-ui/drawer"
  import { css } from "styled-system/css"
</script>

<Drawer.Stack>
  <div class={css({ position: "relative", w: "full", h: "72", overflow: "hidden", borderRadius: "l3", borderWidth: "1px" })}>
    <Drawer.IndentBackground />
    <Drawer.Indent
      class={css({
        minH: "0",
        h: "full",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "4",
        p: "6",
      })}
    >
      <p class={css({ color: "fg.muted", textAlign: "center" })}>This box stands in for your page.</p>
      <Drawer.Root placement="bottom">
        <Drawer.Trigger>
          {#snippet asChild(props)}
            <Button {...props()}>Open drawer</Button>
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
                <Drawer.Title>Indented page</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <Drawer.Description>
                  The page behind shrinks back while this drawer is open, and grows again as you swipe it away.
                </Drawer.Description>
              </Drawer.Body>
              <Drawer.Footer>
                <Drawer.ActionTrigger>
                  {#snippet asChild(props)}
                    <Button {...props()} variant="outline">Close</Button>
                  {/snippet}
                </Drawer.ActionTrigger>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Drawer.Indent>
  </div>
</Drawer.Stack>
