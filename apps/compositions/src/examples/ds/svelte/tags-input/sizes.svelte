<script lang="ts">
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Stack } from "@isbatak/svelte-ui/stack"
  import { TagsInput } from "@isbatak/svelte-ui/tags-input"
</script>

<Stack gap="5" w="full" maxW="sm">
  <TagsInput.Root defaultValue={["react", "vue"]} size="xs">
    <TagsInput.Label>size xs</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Context>
        {#snippet render(tagsInput)}
          {#each tagsInput().value as value, index (index)}
            <TagsInput.Item {index} {value}>
              <TagsInput.ItemPreview>
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger>
                  <Icon name="close" />
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.ItemPreview>
              <TagsInput.ItemInput />
            </TagsInput.Item>
          {/each}
        {/snippet}
      </TagsInput.Context>
      <TagsInput.Input placeholder="Add framework" />
    </TagsInput.Control>
    <TagsInput.HiddenInput />
  </TagsInput.Root>
  <TagsInput.Root defaultValue={["react", "vue"]} size="sm">
    <TagsInput.Label>size sm</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Context>
        {#snippet render(tagsInput)}
          {#each tagsInput().value as value, index (index)}
            <TagsInput.Item {index} {value}>
              <TagsInput.ItemPreview>
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger>
                  <Icon name="close" />
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.ItemPreview>
              <TagsInput.ItemInput />
            </TagsInput.Item>
          {/each}
        {/snippet}
      </TagsInput.Context>
      <TagsInput.Input placeholder="Add framework" />
    </TagsInput.Control>
    <TagsInput.HiddenInput />
  </TagsInput.Root>
  <TagsInput.Root defaultValue={["react", "vue"]} size="md">
    <TagsInput.Label>size md</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Context>
        {#snippet render(tagsInput)}
          {#each tagsInput().value as value, index (index)}
            <TagsInput.Item {index} {value}>
              <TagsInput.ItemPreview>
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger>
                  <Icon name="close" />
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.ItemPreview>
              <TagsInput.ItemInput />
            </TagsInput.Item>
          {/each}
        {/snippet}
      </TagsInput.Context>
      <TagsInput.Input placeholder="Add framework" />
    </TagsInput.Control>
    <TagsInput.HiddenInput />
  </TagsInput.Root>
  <TagsInput.Root defaultValue={["react", "vue"]} size="lg">
    <TagsInput.Label>size lg</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Context>
        {#snippet render(tagsInput)}
          {#each tagsInput().value as value, index (index)}
            <TagsInput.Item {index} {value}>
              <TagsInput.ItemPreview>
                <TagsInput.ItemText>{value}</TagsInput.ItemText>
                <TagsInput.ItemDeleteTrigger>
                  <Icon name="close" />
                </TagsInput.ItemDeleteTrigger>
              </TagsInput.ItemPreview>
              <TagsInput.ItemInput />
            </TagsInput.Item>
          {/each}
        {/snippet}
      </TagsInput.Context>
      <TagsInput.Input placeholder="Add framework" />
    </TagsInput.Control>
    <TagsInput.HiddenInput />
  </TagsInput.Root>
</Stack>
