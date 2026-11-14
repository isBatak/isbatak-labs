<script lang="ts">
  import { Alert } from "@isbatak/svelte-ui/alert"
  import { VStack } from "@isbatak/svelte-ui/stack"
</script>

<VStack gap="4">
  <Alert.Root variant="subtle">
    <Alert.Indicator />
    <Alert.Content>
      <Alert.Title>Subtle alert</Alert.Title>
    </Alert.Content>
  </Alert.Root>
  <Alert.Root variant="surface">
    <Alert.Indicator />
    <Alert.Content>
      <Alert.Title>Surface alert</Alert.Title>
    </Alert.Content>
  </Alert.Root>
  <Alert.Root variant="outline">
    <Alert.Indicator />
    <Alert.Content>
      <Alert.Title>Outline alert</Alert.Title>
    </Alert.Content>
  </Alert.Root>
  <Alert.Root variant="solid">
    <Alert.Indicator />
    <Alert.Content>
      <Alert.Title>Solid alert</Alert.Title>
    </Alert.Content>
  </Alert.Root>
</VStack>
