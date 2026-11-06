import { Input } from "@isbatak/solid-ui/input"
import { InputGroup } from "@isbatak/solid-ui/input-group"

export function InputGroupAddonsDemo() {
  return (
    <InputGroup maxW="sm" startAddon="https://" endAddon=".com">
      <Input placeholder="yoursite" />
    </InputGroup>
  )
}
