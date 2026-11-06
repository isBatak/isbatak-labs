<script setup lang="ts">
import { Button } from "@isbatak/vue-ui/button"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { Icon } from "@isbatak/vue-ui/icon"
import { SearchInput, useSearchInput } from "@isbatak/vue-ui/search-input"

const searchInput = useSearchInput()
</script>

<template>
  <Stack gap="3" w="full" maxW="xs" alignItems="flex-start">
    <HStack gap="2">
      <Button variant="outline" size="sm" @click="searchInput.setValue('tooltip')">Search tooltip</Button>
      <Button variant="outline" size="sm" @click="searchInput.clearValue()">Clear</Button>
    </HStack>
    <SearchInput.RootProvider :value="searchInput">
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
    </SearchInput.RootProvider>
  </Stack>
</template>
