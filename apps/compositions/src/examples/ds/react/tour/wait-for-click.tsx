import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Tour, useTour, waitForEvent } from "@isbatak/react-ui/tour"
import { HStack } from "styled-system/jsx"

export function TourWaitForClickDemo() {
  const tour = useTour({
    steps: [
      {
        id: "save",
        type: "tooltip",
        target: () => document.querySelector<HTMLElement>("#tour-wait-save"),
        title: "Save your work",
        description: "Click Save to continue.",
        effect({ show, next, target }) {
          show()
          const [clicked, cancel] = waitForEvent(target, "click")
          clicked.then(next)
          return cancel
        },
      },
      {
        id: "saved",
        type: "dialog",
        title: "Saved",
        description: "The tour moved on as soon as you clicked the button.",
        actions: [{ label: "Done", action: "dismiss" }],
      },
    ],
  })

  return (
    <>
      <HStack gap="2">
        <Button onClick={() => tour.start()}>Start tour</Button>
        <Button id="tour-wait-save" variant="outline">
          Save
        </Button>
      </HStack>
      <Tour.Root tour={tour}>
        <Portal>
          <Tour.Backdrop />
          <Tour.Spotlight />
          <Tour.Positioner>
            <Tour.Content>
              <Tour.Arrow>
                <Tour.ArrowTip />
              </Tour.Arrow>
              <Tour.CloseTrigger />
              <Tour.Title />
              <Tour.Description />
              <Tour.Control>
                <Tour.ProgressText />
                <Tour.Actions>
                  {(actions) =>
                    actions.map((action) => (
                      <Tour.ActionTrigger key={action.label} action={action} asChild>
                        <Button size="xs">{action.label}</Button>
                      </Tour.ActionTrigger>
                    ))
                  }
                </Tour.Actions>
              </Tour.Control>
            </Tour.Content>
          </Tour.Positioner>
        </Portal>
      </Tour.Root>
    </>
  )
}
