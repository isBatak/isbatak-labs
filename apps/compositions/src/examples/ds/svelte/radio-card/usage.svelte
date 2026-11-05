<script lang="ts">
  import { Grid } from "@isbatak/svelte-ui/grid"
  import { RadioCard } from "@isbatak/svelte-ui/radio-card"
</script>

<RadioCard.Root defaultValue="monthly" variant="surface" width="full" maxW="sm">
  <RadioCard.Label>Billing</RadioCard.Label>
  <Grid columns={2} gap="2">
    <RadioCard.Item value="monthly">
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl>
        <RadioCard.ItemContent>
          <RadioCard.ItemText>Monthly</RadioCard.ItemText>
          <RadioCard.ItemDescription>$12 a month</RadioCard.ItemDescription>
        </RadioCard.ItemContent>
        <RadioCard.ItemIndicator />
      </RadioCard.ItemControl>
    </RadioCard.Item>
    <RadioCard.Item value="yearly">
      <RadioCard.ItemHiddenInput />
      <RadioCard.ItemControl>
        <RadioCard.ItemContent>
          <RadioCard.ItemText>Yearly</RadioCard.ItemText>
          <RadioCard.ItemDescription>$120 a year</RadioCard.ItemDescription>
        </RadioCard.ItemContent>
        <RadioCard.ItemIndicator />
      </RadioCard.ItemControl>
    </RadioCard.Item>
  </Grid>
</RadioCard.Root>
