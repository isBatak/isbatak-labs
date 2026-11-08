<script setup lang="ts">
import { RatingGroup } from "@isbatak/vue-ui/rating-group"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4">
    <RatingGroup.Root :count="5" :defaultValue="3" size="xs">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
    <RatingGroup.Root :count="5" :defaultValue="3" size="sm">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
    <RatingGroup.Root :count="5" :defaultValue="3" size="md">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
    <RatingGroup.Root :count="5" :defaultValue="3" size="lg">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
  </Stack>
</template>
