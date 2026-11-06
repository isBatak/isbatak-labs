import { Icon } from "@isbatak/react-ui/icon"
import { Stack } from "@isbatak/react-ui/stack"
import { TagsInput } from "@isbatak/react-ui/tags-input"

export function TagsInputVariantsDemo() {
  return (
    <Stack gap="5" w="full" maxW="sm">
      <TagsInput.Root defaultValue={["react", "vue"]} variant="outline">
        <TagsInput.Label>variant outline</TagsInput.Label>
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
      <TagsInput.Root defaultValue={["react", "vue"]} variant="subtle">
        <TagsInput.Label>variant subtle</TagsInput.Label>
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
      <TagsInput.Root defaultValue={["react", "vue"]} variant="flushed">
        <TagsInput.Label>variant flushed</TagsInput.Label>
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
