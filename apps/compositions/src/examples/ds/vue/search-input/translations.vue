<script setup lang="ts">
import { Icon } from "@isbatak/vue-ui/icon"
import { SearchInput } from "@isbatak/vue-ui/search-input"
</script>

<template>
  <SearchInput.Root :translations="{ clearTrigger: 'Suche löschen' }" defaultValue="Schaltfläche" maxW="xs">
    <SearchInput.Label>Suche</SearchInput.Label>
    <SearchInput.Control>
      <SearchInput.Icon>
        <Icon name="search" />
      </SearchInput.Icon>
      <SearchInput.Input placeholder="Komponenten durchsuchen" />
      <SearchInput.ClearTrigger>
        <Icon name="close" />
      </SearchInput.ClearTrigger>
    </SearchInput.Control>
  </SearchInput.Root>
</template>
