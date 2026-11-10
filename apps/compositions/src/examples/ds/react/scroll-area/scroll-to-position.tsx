import { Button } from "@isbatak/react-ui/button"
import { ScrollArea, useScrollArea } from "@isbatak/react-ui/scroll-area"
import { Stack } from "@isbatak/react-ui/stack"

export function ScrollAreaScrollToPositionDemo() {
  const scrollArea = useScrollArea()

  return (
    <Stack gap="8" align="flex-start" maxW="xl">
      <Button variant="outline" size="sm" onClick={() => scrollArea.scrollTo({ top: 100, behavior: "smooth" })}>
        Scroll to 100px
      </Button>
      <ScrollArea.RootProvider value={scrollArea} h="32" w="sm" maxW="full">
        <ScrollArea.Viewport>
          <ScrollArea.Content spaceY="4" textStyle="sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
              placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
            </p>
            <p>
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
              nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
            </p>
            <p>
              Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
            </p>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar />
      </ScrollArea.RootProvider>
    </Stack>
  )
}
