import { Editable } from "@isbatak/react-ui/editable"

export function EditableDemo() {
  return (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
    </Editable.Root>
  )
}
