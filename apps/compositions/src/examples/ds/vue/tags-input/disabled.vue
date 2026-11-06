<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { TagsInput } from "@isbatak/vue-ui/tags-input"
</script>

<template>
  <TagsInput.Root :defaultValue="['react', 'vue']" :disabled="true" maxW="sm">
    <TagsInput.Label>Frameworks</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Context v-slot="tagsInput">
        <TagsInput.Item v-for="(value, index) in tagsInput.value" :key="index" :index="index" :value="value">
          <TagsInput.ItemPreview>
            <TagsInput.ItemText>{{ value }}</TagsInput.ItemText>
            <TagsInput.ItemDeleteTrigger>
              <Icon name="close" />
            </TagsInput.ItemDeleteTrigger>
          </TagsInput.ItemPreview>
          <TagsInput.ItemInput />
        </TagsInput.Item>
      </TagsInput.Context>
      <TagsInput.Input placeholder="Add framework" />
    </TagsInput.Control>
    <TagsInput.HiddenInput />
  </TagsInput.Root>
</template>
