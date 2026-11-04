<script setup lang="ts">
import { Heading } from "@isbatak/vue-ui/heading"
import { LinkBox, LinkOverlay } from "@isbatak/vue-ui/link-overlay"
import { Link } from "@isbatak/vue-ui/link"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <LinkBox maxW="sm" p="5" borderWidth="1px" borderRadius="l3">
    <Heading size="md" mb="2">
      <LinkOverlay href="#link-overlay">Article title</LinkOverlay>
    </Heading>
    <Text color="fg.muted" mb="3"> The overlay covers the card, but the link below stays clickable on its own. </Text>
    <Link variant="underline" href="#author"> Author profile </Link>
  </LinkBox>
</template>
