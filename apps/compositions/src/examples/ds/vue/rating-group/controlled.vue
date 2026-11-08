<script setup lang="ts">
import { RatingGroup } from "@isbatak/vue-ui/rating-group"
import { Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
import { ref } from "vue"

const value = ref(3)
</script>

<template>
  <Stack gap="3">
    <RatingGroup.Root :count="5" v-model="value">
      <RatingGroup.Label>Rating</RatingGroup.Label>
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
    <Text textStyle="sm" color="fg.muted">Value: {{ value }}</Text>
  </Stack>
</template>
