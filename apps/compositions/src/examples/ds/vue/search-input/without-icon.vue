<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { SearchInput } from "@isbatak/vue-ui/search-input"
</script>

<template>
  <SearchInput.Root maxW="xs">
    <SearchInput.Label>Search</SearchInput.Label>
    <SearchInput.Control>
      <SearchInput.Input placeholder="Search components" />
      <SearchInput.ClearTrigger>
        <Icon name="close" />
      </SearchInput.ClearTrigger>
    </SearchInput.Control>
  </SearchInput.Root>
</template>
