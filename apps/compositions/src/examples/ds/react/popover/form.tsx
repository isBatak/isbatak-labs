import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Field } from "@isbatak/react-ui/field"
import { Input } from "@isbatak/react-ui/input"
import { Popover } from "@isbatak/react-ui/popover"
import { Textarea } from "@isbatak/react-ui/textarea"
import { Stack } from "styled-system/jsx"

export function PopoverFormDemo() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="outline">Add comment</Button>
      </Popover.Trigger>
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
              <Popover.ActionTrigger asChild>
                <Button size="sm" variant="outline">
                  Cancel
                </Button>
              </Popover.ActionTrigger>
              <Button size="sm">Post</Button>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
