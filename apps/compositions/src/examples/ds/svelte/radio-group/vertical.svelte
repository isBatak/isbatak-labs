<script lang="ts">
  import { RadioGroup } from "@isbatak/svelte-ui/radio-group"
  import { Stack } from "@isbatak/svelte-ui/stack"
</script>

<RadioGroup.Root defaultValue="2" orientation="vertical">
  <RadioGroup.Label>Plan</RadioGroup.Label>
  <Stack gap="3" mt="2">
    <RadioGroup.Item value="1">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>Free</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="2">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>Pro</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="3">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>Team</RadioGroup.ItemText>
    </RadioGroup.Item>
  </Stack>
</RadioGroup.Root>
