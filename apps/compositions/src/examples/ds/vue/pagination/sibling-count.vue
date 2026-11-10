<script setup lang="ts">
import { Pagination } from "@isbatak/vue-ui/pagination"
</script>

<template>
  <Pagination.Root :count="500" :pageSize="10" :siblingCount="2" :defaultPage="12">
    <Pagination.PrevTrigger />
    <Pagination.Items />
    <Pagination.NextTrigger />
  </Pagination.Root>
</template>
