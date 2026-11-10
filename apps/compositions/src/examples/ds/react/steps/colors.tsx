import { Steps } from "@isbatak/react-ui/steps"
import { Stack } from "styled-system/jsx"

export function StepsColorsDemo() {
  return (
    <Stack gap="10">
      <Steps.Root count={3} defaultStep={1} colorPalette="blue">
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
      </Steps.Root>
      <Steps.Root count={3} defaultStep={1} colorPalette="green">
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
      </Steps.Root>
      <Steps.Root count={3} defaultStep={1} colorPalette="red">
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
      </Steps.Root>
    </Stack>
  )
}
