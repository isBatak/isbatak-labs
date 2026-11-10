<script setup lang="ts">
import { Pagination } from "@isbatak/vue-ui/pagination"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const page = ref(1)
</script>

<template>
  <Stack gap="3">
    <Pagination.Root :count="200" :pageSize="10" v-model:page="page">
      <Pagination.PrevTrigger />
      <Pagination.Items />
      <Pagination.NextTrigger />
    </Pagination.Root>
    <Text textStyle="sm" color="fg.muted">Page {{ page }}</Text>
  </Stack>
</template>
