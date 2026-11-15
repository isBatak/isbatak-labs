import { Button } from "@isbatak/react-ui/button"
import { Field } from "@isbatak/react-ui/field"
import { Input } from "@isbatak/react-ui/input"
import { Loader, LoaderOverlay } from "@isbatak/react-ui/loader"
import { useState } from "react"
import { Box, Stack } from "styled-system/jsx"

export function LoaderWithOverlayDemo() {
  const [loading, setLoading] = useState(false)

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
        {loading && (
          <LoaderOverlay bg="bg/80" rounded="l3">
            <Loader textStyle="sm" fontWeight="medium" text="Loading…" />
          </LoaderOverlay>
        )}
      </Box>
      <Button alignSelf="flex-start" variant="outline" onClick={() => setLoading((value) => !value)}>
        Toggle loading
      </Button>
    </Stack>
  )
}
