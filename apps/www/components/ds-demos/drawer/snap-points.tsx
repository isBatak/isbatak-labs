"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Drawer } from "@isbatak/react-ui/drawer"
import { styled } from "styled-system/jsx"

interface EventProps {
  time: string
  title: string
  description: string
}

function Event({ time, title, description }: EventProps) {
  return (
    <styled.li display="flex" gap="4" py="4" borderBottomWidth="1px" _last={{ borderBottomWidth: "0" }}>
      <styled.span w="12" flexShrink="0" color="fg.muted" fontVariantNumeric="tabular-nums">
        {time}
      </styled.span>
      <div>
        <styled.p fontWeight="medium">{title}</styled.p>
        <styled.p color="fg.muted">{description}</styled.p>
      </div>
    </styled.li>
  )
}

export function DrawerSnapPointsDemo() {
  return (
    <Drawer.Root placement="bottom" snapPoints={[0.5, 1]} defaultSnapPoint={0.5}>
      <Drawer.Trigger asChild>
        <Button>View itinerary</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content h="80dvh">
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
              <styled.ol mt="2">
                <Event time="09:00" title="Coffee at the studio" description="Meet the team and plan the day." />
                <Event time="10:00" title="Design workshop" description="Explore ideas for the next release." />
                <Event time="12:00" title="Lunch together" description="Take a break at our favorite local spot." />
                <Event time="14:00" title="Prototype review" description="Walk through the new interactions." />
                <Event time="16:00" title="Team retrospective" description="Share what worked and what to improve." />
                <Event time="17:00" title="Wrap up" description="Capture next steps before heading home." />
              </styled.ol>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Done</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
