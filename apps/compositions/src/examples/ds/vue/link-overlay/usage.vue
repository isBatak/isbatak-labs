<script setup lang="ts">
import { Heading } from "@isbatak/vue-ui/heading"
import { LinkBox, LinkOverlay } from "@isbatak/vue-ui/link-overlay"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <LinkBox maxW="sm" p="5" borderWidth="1px" borderRadius="l3">
    <Text textStyle="xs" color="fg.muted"> 13 days ago </Text>
    <Heading size="md" my="2">
      <LinkOverlay href="#link-overlay">Newsletter: the whole card is clickable</LinkOverlay>
    </Heading>
    <Text color="fg.muted">Every card links to one article, but the whole card is the target.</Text>
  </LinkBox>
</template>
