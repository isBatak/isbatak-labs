import { IconButton } from "@isbatak/solid-ui/button"
import { Editable } from "@isbatak/solid-ui/editable"
import { Icon } from "@isbatak/solid-ui/icon"

export function EditableWithControlsDemo() {
  return (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
      <Editable.Control>
        <Editable.EditTrigger
          asChild={(props) => (
            <IconButton {...props()} variant="ghost" size="xs" aria-label="Edit">
              <Icon name="edit" />
            </IconButton>
          )}
        />
        <Editable.CancelTrigger
          asChild={(props) => (
            <IconButton {...props()} variant="outline" size="xs" aria-label="Cancel">
              <Icon name="close" />
            </IconButton>
          )}
        />
        <Editable.SubmitTrigger
          asChild={(props) => (
            <IconButton {...props()} variant="outline" size="xs" aria-label="Save">
              <Icon name="check" />
            </IconButton>
          )}
        />
      </Editable.Control>
    </Editable.Root>
  )
}
