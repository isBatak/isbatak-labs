import { Icon } from "@isbatak/solid-ui/icon"
import { Index } from "solid-js"
import { Stack } from "@isbatak/solid-ui/stack"
import { TagsInput } from "@isbatak/solid-ui/tags-input"

export function TagsInputSizesDemo() {
  return (
    <Stack gap="5" w="full" maxW="sm">
      <TagsInput.Root defaultValue={["react", "vue"]} size="xs">
        <TagsInput.Label>size xs</TagsInput.Label>
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
      <TagsInput.Root defaultValue={["react", "vue"]} size="sm">
        <TagsInput.Label>size sm</TagsInput.Label>
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
      <TagsInput.Root defaultValue={["react", "vue"]} size="md">
        <TagsInput.Label>size md</TagsInput.Label>
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
      <TagsInput.Root defaultValue={["react", "vue"]} size="lg">
        <TagsInput.Label>size lg</TagsInput.Label>
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
    </Stack>
  )
}
