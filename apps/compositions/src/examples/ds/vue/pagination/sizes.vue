<script setup lang="ts">
import { Pagination } from "@isbatak/vue-ui/pagination"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4">
    <Pagination.Root :count="200" :pageSize="10" size="xs">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
    <Pagination.Root :count="200" :pageSize="10" size="sm">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
    <Pagination.Root :count="200" :pageSize="10" size="md">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
    <Pagination.Root :count="200" :pageSize="10" size="lg">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
  </Stack>
</template>
