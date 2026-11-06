import { Icon } from "@isbatak/react-ui/icon"
import { Input } from "@isbatak/react-ui/input"
import { InputGroup } from "@isbatak/react-ui/input-group"

export function InputGroupEndElementDemo() {
  return (
    <InputGroup maxW="xs" endElement={<Icon name="mail" />}>
      <Input placeholder="Email" />
    </InputGroup>
  )
}
