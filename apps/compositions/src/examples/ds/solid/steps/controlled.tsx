import { Button, ButtonGroup } from "@isbatak/solid-ui/button"
import { Steps } from "@isbatak/solid-ui/steps"
import { createSignal } from "solid-js"

export function StepsControlledDemo() {
  const [step, setStep] = createSignal(1)

  return (
    <Steps.Root count={3} step={step()} onStepChange={(details) => setStep(details.step)}>
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
      <Steps.Content index={0}>Tell us how to reach you.</Steps.Content>
      <Steps.Content index={1}>Choose where the order goes.</Steps.Content>
      <Steps.Content index={2}>Pick how you'd like to pay.</Steps.Content>
      <Steps.CompletedContent>All steps are complete.</Steps.CompletedContent>
      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild={(props) => <Button {...props()}>Prev</Button>} />
        <Steps.NextTrigger asChild={(props) => <Button {...props()}>Next</Button>} />
      </ButtonGroup>
    </Steps.Root>
  )
}
