<script lang="ts">
  import { Box } from "@isbatak/svelte-ui/box"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { TagsInput } from "@isbatak/svelte-ui/tags-input"
</script>

<Box maxW="sm" w="full">
  <TagsInput.Root defaultValue={["react", "vue"]} max={3}>
    <TagsInput.Label>Up to 3 frameworks</TagsInput.Label>
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
</Box>
