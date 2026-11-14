<script lang="ts">
  import { Avatar, useAvatar } from "@isbatak/svelte-ui/avatar"
  import { Code } from "@isbatak/svelte-ui/code"
  import { Stack } from "@isbatak/svelte-ui/stack"

  const id = $props.id()
  const avatar = useAvatar({ id })
</script>

<Stack align="flex-start">
  <Avatar.RootProvider value={avatar}>
    <Avatar.Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" />
    <Avatar.Fallback name="Vincent van Gogh" />
  </Avatar.RootProvider>
  <Code>{avatar().loaded ? "loaded" : "not loaded"}</Code>
</Stack>
