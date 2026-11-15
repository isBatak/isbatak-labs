<script lang="ts">
  import { IconButton } from "@isbatak/svelte-ui/button"
  import { Icon } from "@isbatak/svelte-ui/icon"
  import { Swap } from "@isbatak/svelte-ui/swap"

  let swapped = $state(false)
</script>

<IconButton variant="outline" aria-label="Like" aria-pressed={swapped} onclick={() => (swapped = !swapped)}>
  <Swap.Root variant="scale" swap={swapped}>
    <Swap.Indicator type="off">
      <Icon name="heart" />
    </Swap.Indicator>
    <Swap.Indicator type="on">
      <Icon name="heart-filled" />
    </Swap.Indicator>
  </Swap.Root>
</IconButton>
