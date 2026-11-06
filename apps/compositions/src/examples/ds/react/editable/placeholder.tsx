import { Editable } from "@isbatak/react-ui/editable"

export function EditablePlaceholderDemo() {
  return (
    <Editable.Root placeholder="Add a title">
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
    </Editable.Root>
  )
}
