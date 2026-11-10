<script setup lang="ts">
import { Pagination } from "@isbatak/vue-ui/pagination"
</script>

<template>
  <Pagination.Root :count="200" :pageSize="10">
    <Pagination.FirstTrigger />
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
    <Pagination.LastTrigger />
  </Pagination.Root>
</template>
