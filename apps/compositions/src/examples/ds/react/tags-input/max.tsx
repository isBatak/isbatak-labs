import { Icon } from "@isbatak/react-ui/icon"
import { TagsInput } from "@isbatak/react-ui/tags-input"

export function TagsInputMaxDemo() {
  return (
    <TagsInput.Root defaultValue={["react", "vue"]} max={3} maxW="sm">
      <TagsInput.Label>Up to 3 frameworks</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Context>
          {(tagsInput) =>
            tagsInput.value.map((value, index) => (
              <TagsInput.Item key={index} index={index} value={value}>
                <TagsInput.ItemPreview>
                  <TagsInput.ItemText>{value}</TagsInput.ItemText>
                  <TagsInput.ItemDeleteTrigger>
                    <Icon name="close" />
                  </TagsInput.ItemDeleteTrigger>
                </TagsInput.ItemPreview>
                <TagsInput.ItemInput />
              </TagsInput.Item>
            ))
          }
        </TagsInput.Context>
        <TagsInput.Input placeholder="Add framework" />
      </TagsInput.Control>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
