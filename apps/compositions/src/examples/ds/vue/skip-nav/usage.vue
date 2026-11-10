<script setup lang="ts">
import { Link } from "@isbatak/vue-ui/link"
import { SkipNavContent, SkipNavLink } from "@isbatak/vue-ui/skip-nav"
import { HStack, Stack } from "@isbatak/vue-ui/stack"
import { Text } from "@isbatak/vue-ui/text"
</script>

<template>
  <Stack gap="4">
    <SkipNavLink>Skip to content</SkipNavLink>
    <Text textStyle="sm" color="fg.muted">Click here, then press Tab to show the skip link.</Text>
    <HStack gap="4">
      <Link href="#home">Home</Link>
      <Link href="#docs">Docs</Link>
      <Link href="#blog">Blog</Link>
    </HStack>
    <SkipNavContent>
      <Text>The skip link moves focus here, past the navigation.</Text>
    </SkipNavContent>
  </Stack>
</template>
