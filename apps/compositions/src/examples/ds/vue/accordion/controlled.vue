<script setup lang="ts">
import { Accordion } from "@isbatak/vue-ui/accordion"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const value = ref(["returns"])
</script>

<template>
  <Stack gap="4" width="full" maxW="md">
    <Text textStyle="sm" color="fg.muted">Expanded: {{ value.join(", ") || "none" }}</Text>
    <Accordion.Root v-model="value" :collapsible="true">
      <Accordion.Item value="shipping">
        <Accordion.ItemTrigger>
          How long does shipping take?
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Orders ship within two working days and arrive in three to five.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="returns">
        <Accordion.ItemTrigger>
          Can I return an item?
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Yes, within 30 days of delivery, as long as it's unused.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="payment">
        <Accordion.ItemTrigger>
          Which payment methods do you take?
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>Cards, PayPal and bank transfer.</Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  </Stack>
</template>
