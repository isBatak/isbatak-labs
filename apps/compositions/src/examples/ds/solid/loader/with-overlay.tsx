import { Box } from "@isbatak/solid-ui/box"
import { Button } from "@isbatak/solid-ui/button"
import { Field } from "@isbatak/solid-ui/field"
import { Input } from "@isbatak/solid-ui/input"
import { Loader, LoaderOverlay } from "@isbatak/solid-ui/loader"
import { Stack } from "@isbatak/solid-ui/stack"
import { createSignal, Show } from "solid-js"

export function LoaderWithOverlayDemo() {
  const [loading, setLoading] = createSignal(false)

  return (
    <Stack maxW="xl" gap="4">
      <Box position="relative" p="6" bg="bg.panel" shadow="sm" rounded="l3">
        <Stack gap="4">
          <Field.Root>
            <Field.Label>First name</Field.Label>
            <Input />
          </Field.Root>
          <Field.Root>
            <Field.Label>Last name</Field.Label>
            <Input />
          </Field.Root>
          <Button>Click me</Button>
        </Stack>
        <Show when={loading()}>
          <LoaderOverlay bg="bg/80" rounded="l3">
            <Loader textStyle="sm" fontWeight="medium" text="Loading…" />
          </LoaderOverlay>
        </Show>
      </Box>
      <Button alignSelf="flex-start" variant="outline" onClick={() => setLoading((value) => !value)}>
        Toggle loading
      </Button>
    </Stack>
  )
}
