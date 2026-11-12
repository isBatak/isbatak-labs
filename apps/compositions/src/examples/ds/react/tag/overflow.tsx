import { Tag } from "@isbatak/react-ui/tag"

export function TagOverflowDemo() {
  return (
    <Tag.Root size="sm" colorPalette="blue" maxW="2xs">
      <Tag.Label>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias, laboriosam, quod, quia quidem quae
        voluptatem natus exercitationem autem quibusdam
      </Tag.Label>
      <Tag.EndElement>
        <Tag.CloseTrigger />
      </Tag.EndElement>
    </Tag.Root>
  )
}
