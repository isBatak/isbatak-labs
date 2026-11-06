import { Input } from "@isbatak/react-ui/input"
import { InputGroup } from "@isbatak/react-ui/input-group"

export function InputGroupAddonsDemo() {
  return (
    <InputGroup maxW="sm" startAddon="https://" endAddon=".com">
      <Input placeholder="yoursite" />
    </InputGroup>
  )
}
