<script lang="ts">
  import { RadioGroup } from "@isbatak/svelte-ui/radio-group"
  import { HStack, Stack } from "@isbatak/svelte-ui/stack"
</script>

<Stack gap="4">
  <RadioGroup.Root defaultValue="1" variant="outline">
    <HStack gap="4">
      <RadioGroup.Item value="1">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>outline</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="2">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>outline</RadioGroup.ItemText>
      </RadioGroup.Item>
    </HStack>
  </RadioGroup.Root>
  <RadioGroup.Root defaultValue="1" variant="subtle">
    <HStack gap="4">
      <RadioGroup.Item value="1">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>subtle</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="2">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>subtle</RadioGroup.ItemText>
      </RadioGroup.Item>
    </HStack>
  </RadioGroup.Root>
  <RadioGroup.Root defaultValue="1" variant="solid">
    <HStack gap="4">
      <RadioGroup.Item value="1">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>solid</RadioGroup.ItemText>
      </RadioGroup.Item>
      <RadioGroup.Item value="2">
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>solid</RadioGroup.ItemText>
      </RadioGroup.Item>
    </HStack>
  </RadioGroup.Root>
</Stack>
