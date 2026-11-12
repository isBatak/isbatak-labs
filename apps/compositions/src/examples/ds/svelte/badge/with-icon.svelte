<script lang="ts">
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { EndIcon, Icon, StartIcon } from "@isbatak/svelte-ui/icon"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { css } from "styled-system/css"
</script>

<HStack gap="2">
  <Badge variant="solid" class={css({ colorPalette: "blue" })}>
    <StartIcon>
      {#snippet asChild(iconProps)}<Icon {...iconProps()} name="star" />{/snippet}
    </StartIcon>
    New
  </Badge>
  <Badge variant="surface" class={css({ colorPalette: "green" })}>
    <StartIcon>
      {#snippet asChild(iconProps)}<Icon {...iconProps()} name="check-circle" />{/snippet}
    </StartIcon>
    Verified
  </Badge>
  <Badge variant="outline" class={css({ colorPalette: "yellow" })}>
    Expiring
    <EndIcon>
      {#snippet asChild(iconProps)}<Icon {...iconProps()} name="warning" />{/snippet}
    </EndIcon>
  </Badge>
</HStack>
