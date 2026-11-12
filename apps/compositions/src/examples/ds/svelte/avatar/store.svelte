<script lang="ts">
  import { Avatar, useAvatar } from "@isbatak/svelte-ui/avatar"
  import { Code } from "@isbatak/svelte-ui/code"
  import { Stack } from "@isbatak/svelte-ui/stack"

  const id = $props.id()
  const avatar = useAvatar({ id })
</script>

<Stack align="flex-start">
  <Avatar.RootProvider value={avatar}>
    <Avatar.Image src="https://bit.ly/sage-adebayo" />
    <Avatar.Fallback name="Segun Adebayo" />
  </Avatar.RootProvider>
  <Code>{avatar().loaded ? "loaded" : "not loaded"}</Code>
</Stack>
