import { Icon } from "@isbatak/react-ui/icon"
import { Stack } from "@isbatak/react-ui/stack"
import { TagsInput } from "@isbatak/react-ui/tags-input"

export function TagsInputSizesDemo() {
  return (
    <Stack gap="5" w="full" maxW="sm">
      <TagsInput.Root defaultValue={["react", "vue"]} size="xs">
        <TagsInput.Label>size xs</TagsInput.Label>
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
      <TagsInput.Root defaultValue={["react", "vue"]} size="sm">
        <TagsInput.Label>size sm</TagsInput.Label>
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
      <TagsInput.Root defaultValue={["react", "vue"]} size="md">
        <TagsInput.Label>size md</TagsInput.Label>
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
      <TagsInput.Root defaultValue={["react", "vue"]} size="lg">
        <TagsInput.Label>size lg</TagsInput.Label>
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
    </Stack>
  )
}
