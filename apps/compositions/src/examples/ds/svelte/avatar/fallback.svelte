<script lang="ts">
  import { Avatar } from "@isbatak/svelte-ui/avatar"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack>
  <Avatar.Root>
    <Avatar.Fallback name="Oshigaki Kisame" />
    <Avatar.Image src="https://bit.ly/broken-link" />
  </Avatar.Root>
  <Avatar.Root class={css({ colorPalette: "teal" })}>
    <Avatar.Fallback name="Sasuke Uchiha" />
    <Avatar.Image src="https://bit.ly/broken-link" />
  </Avatar.Root>
  <Avatar.Root class={css({ colorPalette: "red" })}>
    <Avatar.Fallback />
    <Avatar.Image src="https://bit.ly/broken-link" />
  </Avatar.Root>
</HStack>
