import { RadioGroup } from "@isbatak/react-ui/radio-group"
import { HStack } from "@isbatak/react-ui/stack"

export function RadioGroupDisabledDemo() {
  return (
    <RadioGroup.Root defaultValue="1" disabled>
      <HStack gap="6">
        <RadioGroup.Item value="1">
          <RadioGroup.ItemHiddenInput />
          <RadioGroup.ItemIndicator />
          <RadioGroup.ItemText>Option 1</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value="2">
          <RadioGroup.ItemHiddenInput />
          <RadioGroup.ItemIndicator />
          <RadioGroup.ItemText>Option 2</RadioGroup.ItemText>
        </RadioGroup.Item>
      </HStack>
    </RadioGroup.Root>
  )
}
