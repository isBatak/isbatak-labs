"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Tour, useTour } from "@isbatak/react-ui/tour"
import { HStack } from "styled-system/jsx"

export function TourDemo() {
  const tour = useTour({
    steps: [
      {
        id: "save",
        type: "tooltip",
        target: () => document.querySelector<HTMLElement>("#tour-demo-save"),
        title: "Save",
        description: "Keeps your changes.",
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "share",
        type: "tooltip",
        target: () => document.querySelector<HTMLElement>("#tour-demo-share"),
        title: "Share",
        description: "Sends a link to your team.",
        actions: [
          { label: "Back", action: "prev" },
          { label: "Done", action: "dismiss" },
        ],
      },
    ],
  })

  return (
    <>
      <HStack gap="2">
        <Button onClick={() => tour.start()}>Start tour</Button>
        <Button id="tour-demo-save" variant="outline">
          Save
        </Button>
        <Button id="tour-demo-share" variant="outline">
          Share
        </Button>
      </HStack>
      <Tour.Root tour={tour} lazyMount unmountOnExit>
        <Portal>
          <Tour.Backdrop />
          <Tour.Spotlight />
          <Tour.Positioner>
            <Tour.Content>
              <Tour.Arrow>
                <Tour.ArrowTip />
              </Tour.Arrow>
              <Tour.Title />
              <Tour.Description />
              <Tour.Control>
                <Tour.Context>
                  {(context) =>
                    context.step?.actions?.map((action) => (
                      <Tour.ActionTrigger key={action.label} action={action} asChild>
                        <Button size="xs">{action.label}</Button>
                      </Tour.ActionTrigger>
                    ))
                  }
                </Tour.Context>
              </Tour.Control>
            </Tour.Content>
          </Tour.Positioner>
        </Portal>
      </Tour.Root>
    </>
  )
}
