<script lang="ts">
  import { RadioGroup } from "@isbatak/svelte-ui/radio-group"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="4">
  <RadioGroup.Root defaultValue="1" size="sm">
    <HStack gap="4">
      <RadioGroup.Item value="1">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>sm</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="2">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>sm</RadioGroup.ItemText>
      </RadioGroup.Item>
    </HStack>
  </RadioGroup.Root>
  <RadioGroup.Root defaultValue="1" size="md">
    <HStack gap="4">
      <RadioGroup.Item value="1">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>md</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="2">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>md</RadioGroup.ItemText>
      </RadioGroup.Item>
    </HStack>
  </RadioGroup.Root>
  <RadioGroup.Root defaultValue="1" size="lg">
    <HStack gap="4">
      <RadioGroup.Item value="1">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>lg</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="2">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>lg</RadioGroup.ItemText>
      </RadioGroup.Item>
    </HStack>
  </RadioGroup.Root>
</Stack>
