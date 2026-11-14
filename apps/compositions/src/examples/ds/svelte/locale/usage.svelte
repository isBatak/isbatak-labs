<script lang="ts">
  import { Format } from "@isbatak/svelte-ui/format"
  import { LocaleProvider } from "@isbatak/svelte-ui/locale"
  import { VStack } from "@isbatak/svelte-ui/stack"
  import { Text } from "@isbatak/svelte-ui/text"
</script>

<VStack gap="2" alignItems="flex-start">
  <LocaleProvider locale="en-US">
    <Text>en-US: <Format.Number value={1234567.891} /></Text>
  </LocaleProvider>
  <LocaleProvider locale="de-DE">
    <Text>de-DE: <Format.Number value={1234567.891} /></Text>
  </LocaleProvider>
  <LocaleProvider locale="hr-HR">
    <Text>hr-HR: <Format.Number value={1234567.891} /></Text>
  </LocaleProvider>
</VStack>
