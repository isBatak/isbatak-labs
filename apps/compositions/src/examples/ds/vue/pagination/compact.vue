<script setup lang="ts">
import { Pagination } from "@isbatak/vue-ui/pagination"
</script>

<template>
  <Pagination.Root :count="200" :pageSize="10">
    <Pagination.PrevTrigger />
    <Pagination.PageText />
    <Pagination.NextTrigger />
  </Pagination.Root>
</template>
