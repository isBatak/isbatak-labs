<script lang="ts">
  import { RadioGroup } from "@isbatak/svelte-ui/radio-group"
  import { HStack } from "@isbatak/svelte-ui/stack"
</script>

<RadioGroup.Root defaultValue="1">
  <HStack gap="6">
    <RadioGroup.Item value="1">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>Option 1</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="2">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>Option 2</RadioGroup.ItemText>
    </RadioGroup.Item>
    <RadioGroup.Item value="3">
      <RadioGroup.ItemHiddenInput />
      <RadioGroup.ItemIndicator />
      <RadioGroup.ItemText>Option 3</RadioGroup.ItemText>
    </RadioGroup.Item>
  </HStack>
</RadioGroup.Root>
