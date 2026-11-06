<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { SearchInput } from "@isbatak/vue-ui/search-input"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const value = ref("")
</script>

<template>
  <Stack gap="3" w="full" maxW="xs">
    <SearchInput.Root v-model="value">
      <SearchInput.Label>Search</SearchInput.Label>
      <SearchInput.Control>
        <SearchInput.Icon>
          <Icon name="search" />
        </SearchInput.Icon>
        <SearchInput.Input placeholder="Search components" />
        <SearchInput.ClearTrigger>
          <Icon name="close" />
        </SearchInput.ClearTrigger>
      </SearchInput.Control>
    </SearchInput.Root>
    <Text textStyle="sm" color="fg.muted">Query: {{ value || "empty" }}</Text>
  </Stack>
</template>
