import { IconButton } from "@isbatak/react-ui/button"
import { Editable } from "@isbatak/react-ui/editable"
import { Icon } from "@isbatak/react-ui/icon"

export function EditableWithControlsDemo() {
  return (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
      <Editable.Control>
        <Editable.EditTrigger asChild>
          <IconButton variant="ghost" size="xs" aria-label="Edit">
            <Icon name="edit" />
          </IconButton>
        </Editable.EditTrigger>
        <Editable.CancelTrigger asChild>
          <IconButton variant="outline" size="xs" aria-label="Cancel">
            <Icon name="close" />
          </IconButton>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <IconButton variant="outline" size="xs" aria-label="Save">
            <Icon name="check" />
          </IconButton>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable.Root>
  )
}
