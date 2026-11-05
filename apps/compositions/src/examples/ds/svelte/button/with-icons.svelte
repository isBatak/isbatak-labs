<script lang="ts">
  import { Button } from "@isbatak/svelte-ui/button"
  import { EndIcon, Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<HStack gap="4">
  <Button>
    <StartIcon>
      {#snippet asChild(iconProps)}<Icon {...iconProps()} name="mail" />{/snippet}
    </StartIcon>
    Email
  </Button>
  <Button variant="outline">
    Call us
    <EndIcon>
      {#snippet asChild(iconProps)}<Icon {...iconProps()} name="arrow-right" />{/snippet}
    </EndIcon>
  </Button>
</HStack>
