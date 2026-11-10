import { Button, ButtonGroup } from "@isbatak/solid-ui/button"
import { Stack } from "@isbatak/solid-ui/stack"
import { Steps } from "@isbatak/solid-ui/steps"

export function StepsVerticalDemo() {
  return (
    <Steps.Root count={3} orientation="vertical" h="96">
      <Steps.List>
        <Steps.Item index={0}>
          <Steps.Indicator />
          <Steps.Title>Contact</Steps.Title>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={1}>
          <Steps.Indicator />
          <Steps.Title>Shipping</Steps.Title>
          <Steps.Separator />
        </Steps.Item>
        <Steps.Item index={2}>
          <Steps.Indicator />
          <Steps.Title>Payment</Steps.Title>
          <Steps.Separator />
        </Steps.Item>
      </Steps.List>
      <Stack gap="4" alignItems="flex-start">
        <Steps.Content index={0}>Tell us how to reach you.</Steps.Content>
        <Steps.Content index={1}>Choose where the order goes.</Steps.Content>
        <Steps.Content index={2}>Pick how you'd like to pay.</Steps.Content>
        <Steps.CompletedContent>All steps are complete.</Steps.CompletedContent>
        <ButtonGroup size="sm" variant="outline">
          <Steps.PrevTrigger asChild={(props) => <Button {...props()}>Prev</Button>} />
          <Steps.NextTrigger asChild={(props) => <Button {...props()}>Next</Button>} />
        </ButtonGroup>
      </Stack>
    </Steps.Root>
  )
}
