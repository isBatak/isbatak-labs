import { ScrollArea } from "@isbatak/solid-ui/scroll-area"

export function ScrollAreaBothDirectionsDemo() {
  return (
    <ScrollArea.Root h="32" w="lg" maxW="full" size="xs" p="2">
      <ScrollArea.Viewport>
        <ScrollArea.Content spaceY="4" w="2xl" textStyle="sm">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem
            placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
          </p>
          <p>
            Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer
            nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
          </p>
          <p>
            Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.
          </p>
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal" />
      <ScrollArea.Scrollbar orientation="vertical" />
      <ScrollArea.Corner bg="bg" />
    </ScrollArea.Root>
  )
}
