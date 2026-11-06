import { Icon } from "@isbatak/solid-ui/icon"
import { Input } from "@isbatak/solid-ui/input"
import { InputGroup } from "@isbatak/solid-ui/input-group"

export function InputGroupDemo() {
  return (
    <InputGroup maxW="xs" startElement={<Icon name="search" />}>
      <Input placeholder="Search contacts" />
    </InputGroup>
  )
}
