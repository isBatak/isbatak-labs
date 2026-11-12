<script setup lang="ts">
import { Avatar, AvatarGroup } from "@isbatak/vue-ui/avatar"
import { Stack } from "@isbatak/vue-ui/stack"
</script>

<template>
  <Stack>
    <AvatarGroup size="lg" stacking="last-on-top">
      <Avatar.Root>
        <Avatar.Fallback name="Uchiha Sasuke" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=sasuke" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Baki Ani" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=baki" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Uchiha Chan" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=chan" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>+3</Avatar.Fallback>
      </Avatar.Root>
    </AvatarGroup>
    <AvatarGroup size="lg" stacking="first-on-top">
      <Avatar.Root>
        <Avatar.Fallback name="Uchiha Sasuke" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=sasuke" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Baki Ani" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=baki" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Uchiha Chan" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=chan" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>+3</Avatar.Fallback>
      </Avatar.Root>
    </AvatarGroup>
    <AvatarGroup size="lg" spaceX="1" :borderless="true">
      <Avatar.Root>
        <Avatar.Fallback name="Uchiha Sasuke" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=sasuke" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Baki Ani" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=baki" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback name="Uchiha Chan" />
        <Avatar.Image src="https://i.pravatar.cc/300?u=chan" />
      </Avatar.Root>
      <Avatar.Root>
        <Avatar.Fallback>+3</Avatar.Fallback>
      </Avatar.Root>
    </AvatarGroup>
  </Stack>
</template>
