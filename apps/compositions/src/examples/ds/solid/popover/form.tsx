import { Button } from "@isbatak/solid-ui/button"
import { Field } from "@isbatak/solid-ui/field"
import { Input } from "@isbatak/solid-ui/input"
import { Popover } from "@isbatak/solid-ui/popover"
import { Stack } from "@isbatak/solid-ui/stack"
import { Textarea } from "@isbatak/solid-ui/textarea"
import { Portal } from "solid-js/web"

export function PopoverFormDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger
        asChild={(props) => (
          <Button {...props()} variant="outline">
            Add comment
          </Button>
        )}
      />
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Header>
              <Popover.Title>Add a comment</Popover.Title>
            </Popover.Header>
            <Popover.Body>
              <Stack gap="3">
                <Field.Root>
                  <Field.Label>Name</Field.Label>
                  <Input placeholder="Your name" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Comment</Field.Label>
                  <Textarea placeholder="What do you think?" />
                </Field.Root>
              </Stack>
            </Popover.Body>
            <Popover.Footer>
              <Popover.ActionTrigger
                asChild={(props) => (
                  <Button {...props()} size="sm" variant="outline">
                    Cancel
                  </Button>
                )}
              />
              <Button size="sm">Post</Button>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
