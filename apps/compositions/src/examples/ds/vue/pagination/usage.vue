<script setup lang="ts">
import { Pagination } from "@isbatak/vue-ui/pagination"
</script>

<template>
  <Pagination.Root :count="200" :pageSize="10" :defaultPage="1">
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination.Root>
</template>
