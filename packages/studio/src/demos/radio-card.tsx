import { RadioCard } from "@isbatak/react-ui/radio-card"

import type { SampleProps } from "./types"

export function RadioCardSample(props: SampleProps) {
  return (
    <RadioCard.Root defaultValue="react" {...props}>
      <RadioCard.Label>Framework</RadioCard.Label>
      <RadioCard.Item value="react">
        <RadioCard.ItemHiddenInput />
        <RadioCard.ItemControl>
          <RadioCard.ItemContent>
            <RadioCard.ItemText>React</RadioCard.ItemText>
            <RadioCard.ItemDescription>Hooks and components</RadioCard.ItemDescription>
          </RadioCard.ItemContent>
          <RadioCard.ItemIndicator />
        </RadioCard.ItemControl>
      </RadioCard.Item>
      <RadioCard.Item value="vue">
        <RadioCard.ItemHiddenInput />
        <RadioCard.ItemControl>
          <RadioCard.ItemContent>
            <RadioCard.ItemText>Vue</RadioCard.ItemText>
            <RadioCard.ItemDescription>Composition API</RadioCard.ItemDescription>
          </RadioCard.ItemContent>
          <RadioCard.ItemIndicator />
        </RadioCard.ItemControl>
      </RadioCard.Item>
    </RadioCard.Root>
  )
}
