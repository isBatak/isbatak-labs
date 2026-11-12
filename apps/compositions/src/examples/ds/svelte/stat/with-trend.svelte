<script lang="ts">
  import { Stat } from "@isbatak/svelte-ui/stat"
  import { HStack } from "@isbatak/svelte-ui/stack"
  import { Badge } from "@isbatak/svelte-ui/badge"
  import { css } from "styled-system/css"
</script>

<Stat.Root>
  <Stat.Label>Revenue</Stat.Label>
  <HStack>
    <Stat.ValueText>$8,456.40</Stat.ValueText>
    <Badge class={css({ colorPalette: "green", gap: "0" })}>
      <Stat.UpIndicator />
      12%
    </Badge>
  </HStack>
  <Stat.HelpText>since last month</Stat.HelpText>
</Stat.Root>
