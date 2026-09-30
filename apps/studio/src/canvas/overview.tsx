import { createListCollection } from "@ark-ui/react/collection"
import { Select as ArkSelect } from "@ark-ui/react/select"
import { Accordion } from "@isbatak/react-ui/accordion"
import { Badge } from "@isbatak/react-ui/badge"
import { Button } from "@isbatak/react-ui/button"
import { RadioCard } from "@isbatak/react-ui/radio-card"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Select } from "@isbatak/react-ui/select"
import { Slider } from "@isbatak/react-ui/slider"
import { Tabs } from "@isbatak/react-ui/tabs"
import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import {
  Alert,
  Avatar,
  Card,
  CheckIcon,
  ChevronDownIcon,
  Checkbox,
  InfoIcon,
  Input,
  Kbd,
  Switch,
} from "../demos/primitives"
import { Row, Stack } from "./layout"

/**
 * The Overview board: realistic product blocks built only from design-system components, laid out in columns wider
 * than the canvas so it scrolls on both axes (hold Space or use the middle mouse button to pan).
 */
export function OverviewBoard() {
  return (
    <styled.div
      w="max-content"
      css={{
        columnCount: 4,
        columnGap: "6",
        "& > *": { breakInside: "avoid", mb: "6", w: "24rem", display: "block" },
      }}
    >
      <SignInBlock />
      <InvoiceBlock />
      <ShortcutsBlock />
      <PayoutBlock />
      <NotificationsBlock />
      <StockBlock />
      <CatalogBlock />
      <TeamBlock />
      <PricingBlock />
      <PowerBlock />
      <FaqBlock />
      <ProfileBlock />
    </styled.div>
  )
}

function Block(props: { children: ReactNode }) {
  return <Card.Root variant="outline">{props.children}</Card.Root>
}

const Eyebrow = styled("span", { base: { textStyle: "xs", color: "fg.muted" } })

const FieldLabel = styled("label", {
  base: {
    textStyle: "xs",
    fontWeight: "semibold",
    color: "fg.muted",
    textTransform: "uppercase",
    letterSpacing: "wide",
  },
})

function Field(props: { label: string; children: ReactNode }) {
  return (
    <Stack gap="1.5">
      <FieldLabel>{props.label}</FieldLabel>
      {props.children}
    </Stack>
  )
}

function SignInBlock() {
  return (
    <Block>
      <Card.Header>
        <Card.Title>Welcome back</Card.Title>
        <Card.Description>Sign in to continue to your workspace.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Field label="Email">
            <Input placeholder="name@example.com" defaultValue="ivica@panda.studio" />
          </Field>
          <Field label="Password">
            <Input type="password" defaultValue="correct-horse" />
          </Field>
          <Row justifyContent="space-between">
            <Checkbox.Root defaultChecked>
              <Checkbox.HiddenInput />
              <Checkbox.Control>
                <Checkbox.Indicator>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Control>
              <Checkbox.Label>Remember me</Checkbox.Label>
            </Checkbox.Root>
            <Button variant="plain" size="xs">
              Forgot?
            </Button>
          </Row>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button w="full">Sign in</Button>
      </Card.Footer>
    </Block>
  )
}

function InvoiceBlock() {
  return (
    <Block>
      <Card.Header>
        <Row justifyContent="space-between">
          <Eyebrow>Invoice #1042</Eyebrow>
          <Badge colorPalette="green" variant="subtle">
            Early
          </Badge>
        </Row>
        <Card.Title textStyle="3xl">€4,280.00</Card.Title>
        <Card.Description>Due on 14 October · Synthetic Horizons Music LLC</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button variant="outline">Download PDF</Button>
        <Button>Pay now</Button>
      </Card.Footer>
    </Block>
  )
}

function ShortcutsBlock() {
  return (
    <Block>
      <Card.Header>
        <Card.Title>Keyboard shortcuts</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="3">
          <Row justifyContent="space-between">
            <span>Command menu</span>
            <Row gap="1">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </Row>
          </Row>
          <Row justifyContent="space-between">
            <span>Pick a part</span>
            <Row gap="1">
              <Kbd>⌘</Kbd>
              <Kbd>Click</Kbd>
            </Row>
          </Row>
          <Row justifyContent="space-between">
            <span>Undo</span>
            <Row gap="1">
              <Kbd>⌘</Kbd>
              <Kbd>Z</Kbd>
            </Row>
          </Row>
          <Alert.Root status="info" size="sm">
            <Alert.Indicator>
              <InfoIcon />
            </Alert.Indicator>
            <Alert.Content>
              <Alert.Description>Hold Space and drag to pan this board.</Alert.Description>
            </Alert.Content>
          </Alert.Root>
        </Stack>
      </Card.Body>
    </Block>
  )
}

function PayoutBlock() {
  return (
    <Block>
      <Card.Header>
        <Eyebrow>Payout preferences</Eyebrow>
        <Card.Title textStyle="2xl">Receiving method</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Field label="Account holder name">
            <Input defaultValue="Synthetic Horizons Music LLC" />
          </Field>
          <RadioCard.Root defaultValue="bank">
            <RadioCard.Label>Receiving method</RadioCard.Label>
            <Row gap="3" alignItems="stretch" flexWrap="nowrap">
              <RadioCard.Item value="bank" flex="1">
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl>
                  <RadioCard.ItemContent>
                    <RadioCard.ItemText>Bank transfer</RadioCard.ItemText>
                    <RadioCard.ItemDescription>SWIFT / IBAN</RadioCard.ItemDescription>
                  </RadioCard.ItemContent>
                  <RadioCard.ItemIndicator />
                </RadioCard.ItemControl>
              </RadioCard.Item>
              <RadioCard.Item value="paypal" flex="1">
                <RadioCard.ItemHiddenInput />
                <RadioCard.ItemControl>
                  <RadioCard.ItemContent>
                    <RadioCard.ItemText>PayPal</RadioCard.ItemText>
                    <RadioCard.ItemDescription>Instant</RadioCard.ItemDescription>
                  </RadioCard.ItemContent>
                  <RadioCard.ItemIndicator />
                </RadioCard.ItemControl>
              </RadioCard.Item>
            </Row>
          </RadioCard.Root>
          <Field label="IBAN / account number">
            <Input defaultValue="DE89 3704 0044 0532 0130 00" />
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button w="full" colorPalette="green">
          Save payout settings
        </Button>
      </Card.Footer>
    </Block>
  )
}

function NotificationsBlock() {
  return (
    <Block>
      <Card.Header>
        <Card.Title>Notifications</Card.Title>
        <Card.Description>Choose what you want to hear about.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Switch.Root defaultChecked justifyContent="space-between" w="full">
            <Switch.Label>Payouts</Switch.Label>
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch.Root>
          <Switch.Root defaultChecked justifyContent="space-between" w="full">
            <Switch.Label>Price alerts</Switch.Label>
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch.Root>
          <Switch.Root justifyContent="space-between" w="full">
            <Switch.Label>Product news</Switch.Label>
            <Switch.HiddenInput />
            <Switch.Control>
              <Switch.Thumb />
            </Switch.Control>
          </Switch.Root>
        </Stack>
      </Card.Body>
    </Block>
  )
}

const tickers = createListCollection({ items: ["VOO", "VTI", "QQQ"] })

function StockBlock() {
  return (
    <Block>
      <Card.Header>
        <Card.Title textStyle="2xl">Stock performance</Card.Title>
        <Card.Description>6-month price history.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4">
          <Field label="Ticker">
            <Select.Root collection={tickers} defaultValue={["VOO"]} positioning={{ sameWidth: true }}>
              <Select.Trigger asChild>
                <Button variant="outline" justifyContent="space-between" w="full">
                  <ArkSelect.ValueText />
                  <ChevronDownIcon />
                </Button>
              </Select.Trigger>
              <Select.Positioner>
                <Select.Content>
                  <Select.Item item="VOO">
                    <Select.ItemText>VOO</Select.ItemText>
                  </Select.Item>
                  <Select.Item item="VTI">
                    <Select.ItemText>VTI</Select.ItemText>
                  </Select.Item>
                  <Select.Item item="QQQ">
                    <Select.ItemText>QQQ</Select.ItemText>
                  </Select.Item>
                </Select.Content>
              </Select.Positioner>
            </Select.Root>
          </Field>
          <styled.svg viewBox="0 0 320 140" w="full" h="36" color="green.500" aria-label="Price chart">
            <defs>
              <linearGradient id="stock-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="currentColor" stopOpacity="0.25" />
                <stop offset="1" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 35h320M0 70h320M0 105h320" stroke="var(--colors-border-muted)" strokeDasharray="3 3" />
            <path
              d="M0 70 C30 60 60 55 90 62 S140 85 170 72 S220 50 250 60 S300 50 320 40 V140 H0Z"
              fill="url(#stock-fill)"
            />
            <path
              d="M0 70 C30 60 60 55 90 62 S140 85 170 72 S220 50 250 60 S300 50 320 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </styled.svg>
          <Row justifyContent="space-between">
            <Eyebrow>Apr</Eyebrow>
            <Eyebrow>Jun</Eyebrow>
            <Eyebrow>Aug</Eyebrow>
            <Eyebrow>Sep</Eyebrow>
          </Row>
        </Stack>
      </Card.Body>
    </Block>
  )
}

function CatalogBlock() {
  return (
    <Block>
      <Card.Body py="10">
        <Stack gap="4" alignItems="center" textAlign="center">
          <styled.div
            w="12"
            h="12"
            display="grid"
            placeItems="center"
            borderRadius="l3"
            bg="bg.muted"
            css={{ "& svg": { w: "6", h: "6" } }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3" />
            </svg>
          </styled.div>
          <Card.Title textStyle="2xl">Explore catalog</Card.Title>
          <Card.Description>12,400 royalty-free tracks, stems and loops.</Card.Description>
          <Button variant="outline">Browse library</Button>
        </Stack>
      </Card.Body>
    </Block>
  )
}

function TeamBlock() {
  return (
    <Block>
      <Card.Header>
        <Card.Title>Team</Card.Title>
      </Card.Header>
      <Card.Body>
        <Tabs.Root defaultValue="members" variant="line">
          <Tabs.List>
            <Tabs.Trigger value="members">Members</Tabs.Trigger>
            <Tabs.Trigger value="invites">Invites</Tabs.Trigger>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Content value="members">
            <Stack gap="3">
              <Row justifyContent="space-between">
                <Row gap="3">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback>SD</Avatar.Fallback>
                  </Avatar.Root>
                  <span>Sofia Davis</span>
                </Row>
                <Badge variant="subtle">Owner</Badge>
              </Row>
              <Row justifyContent="space-between">
                <Row gap="3">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback>JL</Avatar.Fallback>
                  </Avatar.Root>
                  <span>Jackson Lee</span>
                </Row>
                <Badge variant="outline">Member</Badge>
              </Row>
              <Row justifyContent="space-between">
                <Row gap="3">
                  <Avatar.Root size="sm">
                    <Avatar.Fallback>IN</Avatar.Fallback>
                  </Avatar.Root>
                  <span>Isabella Nguyen</span>
                </Row>
                <Badge variant="outline">Member</Badge>
              </Row>
            </Stack>
          </Tabs.Content>
          <Tabs.Content value="invites">No pending invites.</Tabs.Content>
        </Tabs.Root>
      </Card.Body>
    </Block>
  )
}

function PricingBlock() {
  return (
    <Block>
      <Card.Header>
        <SegmentGroup.Root defaultValue="yearly" orientation="horizontal">
          <SegmentGroup.Indicator />
          <SegmentGroup.Item value="monthly">
            <SegmentGroup.ItemText>Monthly</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
          <SegmentGroup.Item value="yearly">
            <SegmentGroup.ItemText>Yearly</SegmentGroup.ItemText>
            <SegmentGroup.ItemControl />
            <SegmentGroup.ItemHiddenInput />
          </SegmentGroup.Item>
        </SegmentGroup.Root>
        <Row justifyContent="space-between" pt="2">
          <Card.Title>Studio plan</Card.Title>
          <Badge>Save 20%</Badge>
        </Row>
        <styled.span textStyle="3xl" fontWeight="semibold">
          €96{" "}
          <styled.span textStyle="sm" color="fg.muted" fontWeight="normal">
            / year
          </styled.span>
        </styled.span>
      </Card.Header>
      <Card.Body>
        <Stack gap="2" textStyle="sm">
          <Row gap="2">
            <styled.span color="green.600" css={{ "& svg": { w: "4", h: "4" } }}>
              <CheckIcon />
            </styled.span>
            Unlimited themes
          </Row>
          <Row gap="2">
            <styled.span color="green.600" css={{ "& svg": { w: "4", h: "4" } }}>
              <CheckIcon />
            </styled.span>
            Export presets and CSS
          </Row>
          <Row gap="2">
            <styled.span color="green.600" css={{ "& svg": { w: "4", h: "4" } }}>
              <CheckIcon />
            </styled.span>
            Shared review links
          </Row>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Button w="full">Upgrade</Button>
      </Card.Footer>
    </Block>
  )
}

function PowerBlock() {
  return (
    <Block>
      <Card.Header>
        <Card.Title textStyle="2xl">Power usage</Card.Title>
        <Card.Description>Studio A · last 24 hours</Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="5">
          <Row justifyContent="space-between" alignItems="baseline">
            <styled.span textStyle="4xl" fontWeight="semibold" fontVariantNumeric="tabular-nums">
              18.4
              <styled.span textStyle="md" color="fg.muted" fontWeight="normal">
                {" "}
                kWh
              </styled.span>
            </styled.span>
            <Badge colorPalette="green" variant="subtle">
              −12% vs. yesterday
            </Badge>
          </Row>
          <Slider.Root defaultValue={[65]}>
            <Row justifyContent="space-between">
              <Slider.Label>Daily limit</Slider.Label>
              <Slider.ValueText />
            </Row>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0}>
                <Slider.HiddenInput />
              </Slider.Thumb>
            </Slider.Control>
          </Slider.Root>
        </Stack>
      </Card.Body>
    </Block>
  )
}

function FaqBlock() {
  return (
    <Block>
      <Card.Header>
        <Card.Title>Questions</Card.Title>
      </Card.Header>
      <Card.Body>
        <Accordion.Root defaultValue={["export"]} collapsible>
          <Accordion.Item value="export">
            <Accordion.ItemTrigger>
              How do I export a theme?
              <Accordion.ItemIndicator ms="auto">
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Open Get code and copy the Panda preset into your config.</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="dark">
            <Accordion.ItemTrigger>
              Does it support dark mode?
              <Accordion.ItemIndicator ms="auto">
                <ChevronDownIcon />
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Yes. Semantic tokens are edited per color mode.</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </Card.Body>
    </Block>
  )
}

function ProfileBlock() {
  return (
    <Block>
      <Card.Body py="8">
        <Stack gap="4" alignItems="center" textAlign="center">
          <Avatar.Root size="2xl">
            <Avatar.Fallback>SD</Avatar.Fallback>
          </Avatar.Root>
          <Stack gap="1">
            <Card.Title>Sofia Davis</Card.Title>
            <Card.Description>Design systems · Zagreb</Card.Description>
          </Stack>
          <Row gap="2" justifyContent="center">
            <Badge variant="outline">Panda CSS</Badge>
            <Badge variant="outline">Ark UI</Badge>
            <Badge variant="outline">Zag</Badge>
          </Row>
          <Row gap="2" justifyContent="center">
            <Button variant="outline" size="sm">
              Message
            </Button>
            <Button size="sm">Follow</Button>
          </Row>
        </Stack>
      </Card.Body>
    </Block>
  )
}
