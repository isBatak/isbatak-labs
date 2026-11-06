import { Icon } from "@isbatak/solid-ui/icon"
import { Input } from "@isbatak/solid-ui/input"
import { InputGroup } from "@isbatak/solid-ui/input-group"

export function InputGroupEndElementDemo() {
  return (
    <InputGroup maxW="xs" endElement={<Icon name="mail" />}>
      <Input placeholder="Email" />
    </InputGroup>
  )
}
