<script setup lang="ts">
import { Pagination } from "@isbatak/vue-ui/pagination"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4">
    <Pagination.Root :count="200" :pageSize="10" variant="ghost">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
    <Pagination.Root :count="200" :pageSize="10" variant="outline">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
    <Pagination.Root :count="200" :pageSize="10" variant="subtle">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
    <Pagination.Root :count="200" :pageSize="10" variant="surface">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
  </Stack>
</template>
