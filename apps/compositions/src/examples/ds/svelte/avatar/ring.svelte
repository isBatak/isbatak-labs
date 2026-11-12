<script lang="ts">
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="4">
  <Avatar.Root ring class={css({ colorPalette: "pink" })}>
    <Avatar.Fallback name="Random" />
    <Avatar.Image src="https://randomuser.me/api/portraits/men/70.jpg" />
  </Avatar.Root>
  <Avatar.Root ring class={css({ colorPalette: "green" })}>
    <Avatar.Fallback name="Random" />
    <Avatar.Image src="https://randomuser.me/api/portraits/men/54.jpg" />
  </Avatar.Root>
  <Avatar.Root ring class={css({ colorPalette: "blue" })}>
    <Avatar.Fallback name="Random" />
    <Avatar.Image src="https://randomuser.me/api/portraits/men/42.jpg" />
  </Avatar.Root>
</HStack>
