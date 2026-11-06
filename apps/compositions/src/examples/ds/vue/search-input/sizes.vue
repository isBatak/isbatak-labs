<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { SearchInput } from "@isbatak/vue-ui/search-input"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="5" w="full" maxW="xs">
    <SearchInput.Root size="xs">
      <SearchInput.Label>size xs</SearchInput.Label>
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
    <SearchInput.Root size="sm">
      <SearchInput.Label>size sm</SearchInput.Label>
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
    <SearchInput.Root size="md">
      <SearchInput.Label>size md</SearchInput.Label>
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
    <SearchInput.Root size="lg">
      <SearchInput.Label>size lg</SearchInput.Label>
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
  </Stack>
</template>
