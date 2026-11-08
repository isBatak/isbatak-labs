<script setup lang="ts">
import { RatingGroup } from "@isbatak/vue-ui/rating-group"
import { Icon } from "@isbatak/vue-ui/icon"
</script>

<template>
  <RatingGroup.Root :count="5" :defaultValue="4" colorPalette="red">
    <RatingGroup.Label>Favorite</RatingGroup.Label>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items>
        <template #icon><Icon name="heart-filled" /></template>
      </RatingGroup.Items>
    </RatingGroup.Control>
  </RatingGroup.Root>
</template>
