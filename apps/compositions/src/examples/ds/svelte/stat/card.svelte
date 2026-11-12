<script lang="ts">
  import { Stat } from "@isbatak/svelte-ui/stat"
  import { css } from "styled-system/css"
</script>

<Stat.Group class={css({ gap: "4" })}>
  <Stat.Root card>
    <Stat.Label>Sent</Stat.Label>
    <Stat.ValueText>345,670</Stat.ValueText>
    <Stat.HelpText>
      <Stat.UpIndicator />
      23.36%
    </Stat.HelpText>
  </Stat.Root>
  <Stat.Root card>
    <Stat.Label>Clicked</Stat.Label>
    <Stat.ValueText>45</Stat.ValueText>
    <Stat.HelpText>
      <Stat.DownIndicator />
      9.05%
    </Stat.HelpText>
  </Stat.Root>
</Stat.Group>
