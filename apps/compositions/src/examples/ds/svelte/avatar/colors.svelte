<script lang="ts">
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
  import { css } from "styled-system/css"
</script>

<Stack gap="2" align="flex-start">
  <HStack gap="10">
    <Text minW="[8ch]">gray</Text>
    <Avatar.Root class={css({ colorPalette: "gray" })}>
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "gray" })}>
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "gray" })}>
      <Avatar.Fallback />
    </Avatar.Root>
  </HStack>
  <HStack gap="10">
    <Text minW="[8ch]">red</Text>
    <Avatar.Root class={css({ colorPalette: "red" })}>
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "red" })}>
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "red" })}>
      <Avatar.Fallback />
    </Avatar.Root>
  </HStack>
  <HStack gap="10">
    <Text minW="[8ch]">green</Text>
    <Avatar.Root class={css({ colorPalette: "green" })}>
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "green" })}>
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "green" })}>
      <Avatar.Fallback />
    </Avatar.Root>
  </HStack>
  <HStack gap="10">
    <Text minW="[8ch]">blue</Text>
    <Avatar.Root class={css({ colorPalette: "blue" })}>
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "blue" })}>
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "blue" })}>
      <Avatar.Fallback />
    </Avatar.Root>
  </HStack>
  <HStack gap="10">
    <Text minW="[8ch]">teal</Text>
    <Avatar.Root class={css({ colorPalette: "teal" })}>
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "teal" })}>
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "teal" })}>
      <Avatar.Fallback />
    </Avatar.Root>
  </HStack>
  <HStack gap="10">
    <Text minW="[8ch]">purple</Text>
    <Avatar.Root class={css({ colorPalette: "purple" })}>
      <Avatar.Fallback name="Jane Doe" />
      <Avatar.Image src="https://i.pravatar.cc/300?u=jane-doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "purple" })}>
      <Avatar.Fallback name="Jane Doe" />
    </Avatar.Root>
    <Avatar.Root class={css({ colorPalette: "purple" })}>
      <Avatar.Fallback />
    </Avatar.Root>
  </HStack>
</Stack>
