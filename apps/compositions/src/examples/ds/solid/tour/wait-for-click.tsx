import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { Tour, useTour, waitForEvent } from "@isbatak/solid-ui/tour"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

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
        <Button onClick={() => tour().start()}>Start tour</Button>
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
                  {(actions) => (
                    <For each={actions()}>
                      {(action) => (
                        <Tour.ActionTrigger
                          action={action}
                          asChild={(props) => (
                            <Button {...props()} size="xs">
                              {action.label}
                            </Button>
                          )}
                        />
                      )}
                    </For>
                  )}
                </Tour.Actions>
              </Tour.Control>
            </Tour.Content>
          </Tour.Positioner>
        </Portal>
      </Tour.Root>
    </>
  )
}
