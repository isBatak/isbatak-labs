import { Icon } from "@isbatak/solid-ui/icon"
import { Index } from "solid-js"
import { TagsInput } from "@isbatak/solid-ui/tags-input"

export function TagsInputDemo() {
  return (
    <TagsInput.Root defaultValue={["react", "vue"]} maxW="sm">
      <TagsInput.Label>Frameworks</TagsInput.Label>
      <TagsInput.Control>
        <TagsInput.Context>
          {(tagsInput) => (
            <Index each={tagsInput().value}>
              {(value, index) => (
                <TagsInput.Item index={index} value={value()}>
                  <TagsInput.ItemPreview>
                    <TagsInput.ItemText>{value()}</TagsInput.ItemText>
                    <TagsInput.ItemDeleteTrigger>
                      <Icon name="close" />
                    </TagsInput.ItemDeleteTrigger>
                  </TagsInput.ItemPreview>
                  <TagsInput.ItemInput />
                </TagsInput.Item>
              )}
            </Index>
          )}
        </TagsInput.Context>
        <TagsInput.Input placeholder="Add framework" />
      </TagsInput.Control>
      <TagsInput.HiddenInput />
    </TagsInput.Root>
  )
}
