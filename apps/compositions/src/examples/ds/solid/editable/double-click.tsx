import { Editable } from "@isbatak/solid-ui/editable"

export function EditableDoubleClickDemo() {
  return (
    <Editable.Root defaultValue="Double-click to edit" activationMode="dblclick">
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
    </Editable.Root>
  )
}
