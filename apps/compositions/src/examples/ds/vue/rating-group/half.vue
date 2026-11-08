<script setup lang="ts">
import { RatingGroup } from "@isbatak/vue-ui/rating-group"
</script>

<template>
  <RatingGroup.Root :count="5" :defaultValue="2.5" :allowHalf="true">
    <RatingGroup.Label>Rating</RatingGroup.Label>
    <RatingGroup.HiddenInput />
    <RatingGroup.Control>
      <RatingGroup.Items />
    </RatingGroup.Control>
  </RatingGroup.Root>
</template>
