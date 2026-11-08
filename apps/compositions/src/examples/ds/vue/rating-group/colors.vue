<script setup lang="ts">
import { RatingGroup } from "@isbatak/vue-ui/rating-group"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack gap="4">
    <RatingGroup.Root :count="5" :defaultValue="3" colorPalette="gray">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
    <RatingGroup.Root :count="5" :defaultValue="3" colorPalette="blue">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
    <RatingGroup.Root :count="5" :defaultValue="3" colorPalette="green">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
    <RatingGroup.Root :count="5" :defaultValue="3" colorPalette="orange">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
    <RatingGroup.Root :count="5" :defaultValue="3" colorPalette="pink">
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        <RatingGroup.Items />
      </RatingGroup.Control>
    </RatingGroup.Root>
  </Stack>
</template>
