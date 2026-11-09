import { Button } from "@isbatak/solid-ui/button"
import { HStack } from "@isbatak/solid-ui/stack"
import { Tour, useTour } from "@isbatak/solid-ui/tour"
import { For } from "solid-js"
import { Portal } from "solid-js/web"

export function TourDemo() {
  const tour = useTour({
    steps: [
      {
        id: "save",
        type: "tooltip",
        target: () => document.querySelector<HTMLElement>("#tour-usage-save"),
        title: "Save",
        description: "Keeps your changes.",
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "share",
        type: "tooltip",
        target: () => document.querySelector<HTMLElement>("#tour-usage-share"),
        title: "Share",
        description: "Sends a link to your team.",
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "export",
        type: "tooltip",
        target: () => document.querySelector<HTMLElement>("#tour-usage-export"),
        title: "Export",
        description: "Downloads a copy as a PDF.",
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
        <Button onClick={() => tour().start()}>Start tour</Button>
        <Button id="tour-usage-save" variant="outline">
          Save
        </Button>
        <Button id="tour-usage-share" variant="outline">
          Share
        </Button>
        <Button id="tour-usage-export" variant="outline">
          Export
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
