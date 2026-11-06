<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { SearchInput } from "@isbatak/vue-ui/search-input"
import { field } from "@isbatak/panda-ds/recipes"

const fieldClasses = field()
</script>

<template>
  <SearchInput.Root :invalid="true" defaultValue="a" maxW="xs">
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
    <span :class="fieldClasses.errorText">Type at least 2 characters.</span>
  </SearchInput.Root>
</template>
