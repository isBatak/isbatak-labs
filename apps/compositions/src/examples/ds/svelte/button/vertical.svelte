<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="1">
  <Button orientation="vertical" variant="ghost" size="sm">
    <StartIcon>
      {#snippet asChild(iconProps)}<Icon {...iconProps()} name="home" />{/snippet}
    </StartIcon>
    Home
  </Button>
  <Button orientation="vertical" variant="ghost" size="sm">
    <StartIcon>
      {#snippet asChild(iconProps)}<Icon {...iconProps()} name="search" />{/snippet}
    </StartIcon>
    Search
  </Button>
  <Button orientation="vertical" variant="ghost" size="sm">
    <StartIcon>
      {#snippet asChild(iconProps)}<Icon {...iconProps()} name="settings" />{/snippet}
    </StartIcon>
    Settings
  </Button>
</HStack>
