import { Editable } from "@isbatak/react-ui/editable"

export function EditableDisabledDemo() {
  return (
    <Editable.Root defaultValue="Can't edit this" disabled>
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
    </Editable.Root>
  )
}
