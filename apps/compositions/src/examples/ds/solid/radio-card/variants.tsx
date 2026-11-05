import { Grid } from "@isbatak/solid-ui/grid"
import { RadioCard } from "@isbatak/solid-ui/radio-card"
import { Stack } from "@isbatak/solid-ui/stack"

export function RadioCardVariantsDemo() {
  return (
    <Stack gap="6" w="full" maxW="sm">
      <RadioCard.Root defaultValue="a" variant="surface">
        <RadioCard.Label>surface</RadioCard.Label>
        <Grid columns={2} gap="2">
          <RadioCard.Item value="a">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>Option A</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
          <RadioCard.Item value="b">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>Option B</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        </Grid>
      </RadioCard.Root>
      <RadioCard.Root defaultValue="a" variant="subtle">
        <RadioCard.Label>subtle</RadioCard.Label>
        <Grid columns={2} gap="2">
          <RadioCard.Item value="a">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>Option A</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
          <RadioCard.Item value="b">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>Option B</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        </Grid>
      </RadioCard.Root>
      <RadioCard.Root defaultValue="a" variant="outline">
        <RadioCard.Label>outline</RadioCard.Label>
        <Grid columns={2} gap="2">
          <RadioCard.Item value="a">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>Option A</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
          <RadioCard.Item value="b">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>Option B</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        </Grid>
      </RadioCard.Root>
      <RadioCard.Root defaultValue="a" variant="solid">
        <RadioCard.Label>solid</RadioCard.Label>
        <Grid columns={2} gap="2">
          <RadioCard.Item value="a">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>Option A</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
          <RadioCard.Item value="b">
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>Option B</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        </Grid>
      </RadioCard.Root>
    </Stack>
  )
}
