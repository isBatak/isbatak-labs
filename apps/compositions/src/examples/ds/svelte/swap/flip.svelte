<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Swap } from "@isbatak/svelte-ui/swap"

  let swapped = $state(false)
</script>

<IconButton variant="outline" aria-label="Toggle lock" aria-pressed={swapped} onclick={() => (swapped = !swapped)}>
  <Swap.Root variant="flip" swap={swapped}>
    <Swap.Indicator type="off">
      <Icon name="lock" />
    </Swap.Indicator>
    <Swap.Indicator type="on">
      <Icon name="unlock" />
    </Swap.Indicator>
  </Swap.Root>
</IconButton>
