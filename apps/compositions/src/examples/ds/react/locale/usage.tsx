import { Format } from "@isbatak/react-ui/format"
import { LocaleProvider } from "@isbatak/react-ui/locale"
import { Text } from "@isbatak/react-ui/text"
import { VStack } from "@isbatak/react-ui/stack"

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
