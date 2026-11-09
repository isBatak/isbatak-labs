import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { Tour, useTour } from "@isbatak/solid-ui/tour"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

export function TourStepTypesDemo() {
  const tour = useTour({
    steps: [
      {
        id: "welcome",
        type: "dialog",
        title: "Welcome",
        description: "A dialog step has no target, so it opens in the middle of the screen.",
        actions: [{ label: "Start", action: "next" }],
      },
      {
        id: "publish",
        type: "tooltip",
        target: () => document.querySelector<HTMLElement>("#tour-step-types-publish"),
        title: "Publish",
        description: "A tooltip step points at its target and cuts it out of the backdrop.",
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "help",
        type: "floating",
        placement: "bottom-end",
        title: "Need help?",
        description: "A floating step sits in a corner of the screen and doesn't block the page.",
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "done",
        type: "dialog",
        title: "All set",
        description: "You can restart the tour at any time.",
        actions: [{ label: "Finish", action: "dismiss" }],
      },
    ],
  })

  return (
    <>
      <HStack gap="2">
        <Button onClick={() => tour().start()}>Start tour</Button>
        <Button id="tour-step-types-publish" variant="outline">
          Publish
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
                            <Button {...props()} size="xs" variant={action.action === "prev" ? "outline" : "solid"}>
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
