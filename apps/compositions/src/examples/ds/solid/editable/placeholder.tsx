import { Editable } from "@isbatak/solid-ui/editable"

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
