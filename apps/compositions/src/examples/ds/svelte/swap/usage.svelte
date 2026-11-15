<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Swap } from "@isbatak/svelte-ui/swap"

  let swapped = $state(false)
</script>

<IconButton variant="outline" aria-label="Copy" aria-pressed={swapped} onclick={() => (swapped = !swapped)}>
  <Swap.Root swap={swapped}>
    <Swap.Indicator type="off">
      <Icon name="copy" />
    </Swap.Indicator>
    <Swap.Indicator type="on">
      <Icon name="check" />
    </Swap.Indicator>
  </Swap.Root>
</IconButton>
