import { Button } from "@isbatak/solid-ui/button"
import { Drawer } from "@isbatak/solid-ui/drawer"
import { Portal } from "solid-js/web"
import { css } from "styled-system/css"

interface EventProps {
  time: string
  title: string
  description: string
}

function Event(props: EventProps) {
  return (
    <li
      class={css({ display: "flex", gap: "4", py: "4", borderBottomWidth: "1px", _last: { borderBottomWidth: "0" } })}
    >
      <span class={css({ w: "12", flexShrink: "0", color: "fg.muted", fontVariantNumeric: "tabular-nums" })}>
        {props.time}
      </span>
      <div>
        <p class={css({ fontWeight: "medium" })}>{props.title}</p>
        <p class={css({ color: "fg.muted" })}>{props.description}</p>
      </div>
    </li>
  )
}

export function DrawerSnapPointsDemo() {
  return (
    <Drawer.Root placement="bottom" snapPoints={[0.5, 1]} defaultSnapPoint={0.5}>
      <Drawer.Trigger asChild={(props) => <Button {...props()}>View itinerary</Button>} />
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content h="[80dvh]">
            <Drawer.Grabber>
              <Drawer.GrabberIndicator />
            </Drawer.Grabber>
            <Drawer.Header>
              <Drawer.Title>Team day itinerary</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body css={{ overflowY: "hidden", "[data-expanded] &": { overflowY: "auto" } }}>
              <Drawer.Description>
                Swipe up to see the full schedule, or down to collapse or dismiss it.
              </Drawer.Description>
              <ol class={css({ mt: "2" })}>
                <Event time="09:00" title="Coffee at the studio" description="Meet the team and plan the day." />
                <Event time="10:00" title="Design workshop" description="Explore ideas for the next release." />
                <Event time="12:00" title="Lunch together" description="Take a break at our favorite local spot." />
                <Event time="14:00" title="Prototype review" description="Walk through the new interactions." />
                <Event time="16:00" title="Team retrospective" description="Share what worked and what to improve." />
                <Event time="17:00" title="Wrap up" description="Capture next steps before heading home." />
              </ol>
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
