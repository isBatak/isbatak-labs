import { Format } from "@isbatak/solid-ui/format"
import { LocaleProvider } from "@isbatak/solid-ui/locale"
import { Text } from "@isbatak/solid-ui/text"
import { VStack } from "@isbatak/solid-ui/stack"

export function LocaleDemo() {
  return (
    <VStack gap="2" alignItems="flex-start">
      <LocaleProvider locale="en-US">
        <Text>
          en-US: <Format.Number value={1234567.891} />
        </Text>
      </LocaleProvider>
      <LocaleProvider locale="de-DE">
        <Text>
          de-DE: <Format.Number value={1234567.891} />
        </Text>
      </LocaleProvider>
      <LocaleProvider locale="hr-HR">
        <Text>
          hr-HR: <Format.Number value={1234567.891} />
        </Text>
      </LocaleProvider>
    </VStack>
  )
}
