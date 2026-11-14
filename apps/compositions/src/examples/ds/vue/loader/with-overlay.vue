<script setup lang="ts">
import { Box } from "@isbatak/vue-ui/box"
import { Button } from "@isbatak/vue-ui/button"
import { Field } from "@isbatak/vue-ui/field"
import { Input } from "@isbatak/vue-ui/input"
import { Loader, LoaderOverlay } from "@isbatak/vue-ui/loader"
import { Stack } from "@isbatak/vue-ui/stack"
import { ref } from "vue"

const loading = ref(false)
</script>

<template>
  <Stack maxW="xl" gap="4">
    <Box position="relative" p="6" bg="bg.panel" shadow="sm" rounded="l3">
      <Stack gap="4">
        <Field.Root>
          <Field.Label>First name</Field.Label>
          <Input />
        </Field.Root>
        <Field.Root>
          <Field.Label>Last name</Field.Label>
          <Input />
        </Field.Root>
        <Button>Click me</Button>
      </Stack>
      <LoaderOverlay v-if="loading" bg="bg/80" rounded="l3">
        <Loader textStyle="sm" fontWeight="medium" text="Loading…" />
      </LoaderOverlay>
    </Box>
    <Button alignSelf="flex-start" variant="outline" @click="loading = !loading">Toggle loading</Button>
  </Stack>
</template>
