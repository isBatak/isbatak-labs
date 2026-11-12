import { Tag } from "@isbatak/solid-ui/tag"
import { Wrap } from "@isbatak/solid-ui/wrap"

export function TagColorsDemo() {
  return (
    <Wrap gap="2">
      <Tag.Root colorPalette="gray">
        <Tag.Label>Gray</Tag.Label>
      </Tag.Root>
      <Tag.Root colorPalette="blue">
        <Tag.Label>Blue</Tag.Label>
      </Tag.Root>
      <Tag.Root colorPalette="green">
        <Tag.Label>Green</Tag.Label>
      </Tag.Root>
      <Tag.Root colorPalette="yellow">
        <Tag.Label>Yellow</Tag.Label>
      </Tag.Root>
      <Tag.Root colorPalette="red">
        <Tag.Label>Red</Tag.Label>
      </Tag.Root>
      <Tag.Root colorPalette="purple">
        <Tag.Label>Purple</Tag.Label>
      </Tag.Root>
    </Wrap>
  )
}
