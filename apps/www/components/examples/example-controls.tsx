"use client"

import { Portal } from "@ark-ui/react/portal"
import { Button } from "@isbatak/react-ui/button"
import { Popover } from "@isbatak/react-ui/popover"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Slider } from "@isbatak/react-ui/slider"
import { Switch } from "@isbatak/react-ui/switch"
import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { type ControlValues, resetControls, setControl, useExampleControls } from "./controls-store"

type BooleanControl = { [N in keyof ControlValues]: ControlValues[N] extends boolean ? N : never }[keyof ControlValues]
type NumberControl = { [N in keyof ControlValues]: ControlValues[N] extends number ? N : never }[keyof ControlValues]

const Section = styled("div", {
  base: {
    display: "grid",
    gap: "3",
    "& + &": { pt: "4", mt: "4", borderTopWidth: "1px" },
  },
})

const Legend = styled("p", {
  base: {
    textStyle: "overline",
    color: "fg.subtle",
  },
})

const FieldLabel = styled("span", {
  base: {
    textStyle: "sm",
    color: "fg.muted",
  },
})

function SwitchField({ id, name, label }: { id: string; name: BooleanControl; label: string }) {
  const { values } = useExampleControls(id)

  return (
    <Switch.Root
      size="sm"
      display="flex"
      justifyContent="space-between"
      checked={values[name]}
      onCheckedChange={(details) => setControl(id, name, details.checked)}
    >
      <Switch.Label textStyle="sm" fontWeight="normal" color="fg.muted">
        {label}
      </Switch.Label>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.HiddenInput />
    </Switch.Root>
  )
}

interface SliderFieldProps {
  id: string
  name: NumberControl
  label: string
  min: number
  max: number
  step: number
}

function SliderField({ id, name, label, min, max, step }: SliderFieldProps) {
  const { values } = useExampleControls(id)

  return (
    <Slider.Root
      size="sm"
      min={min}
      max={max}
      step={step}
      value={[values[name]]}
      onValueChange={({ value: [value] }) => value !== undefined && setControl(id, name, value)}
    >
      <styled.div display="flex" justifyContent="space-between">
        <Slider.Label textStyle="sm" fontWeight="normal" color="fg.muted">
          {label}
        </Slider.Label>
        <Slider.ValueText textStyle="sm" fontVariantNumeric="tabular-nums" />
      </styled.div>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.HiddenInput />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}

function VariantField({ id }: { id: string }) {
  const { values } = useExampleControls(id)

  return (
    <styled.div display="grid" gap="2">
      <FieldLabel id={`${id}-variant`}>Variant</FieldLabel>
      <SegmentGroup.Root
        size="xs"
        fitted
        orientation="horizontal"
        aria-labelledby={`${id}-variant`}
        value={values.variant}
        onValueChange={(details) =>
          details.value && setControl(id, "variant", details.value as ControlValues["variant"])
        }
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="subtle">
          <SegmentGroup.ItemText>Subtle</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="outline">
          <SegmentGroup.ItemText>Outline</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="solid">
          <SegmentGroup.ItemText>Solid</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </styled.div>
  )
}

function SizeField({ id }: { id: string }) {
  const { values } = useExampleControls(id)

  return (
    <styled.div display="grid" gap="2">
      <FieldLabel id={`${id}-size`}>Size</FieldLabel>
      <SegmentGroup.Root
        size="xs"
        fitted
        orientation="horizontal"
        aria-labelledby={`${id}-size`}
        value={values.size}
        onValueChange={(details) => details.value && setControl(id, "size", details.value as ControlValues["size"])}
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Item value="sm">
          <SegmentGroup.ItemText>sm</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="md">
          <SegmentGroup.ItemText>md</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
        <SegmentGroup.Item value="lg">
          <SegmentGroup.ItemText>lg</SegmentGroup.ItemText>
          <SegmentGroup.ItemHiddenInput />
        </SegmentGroup.Item>
      </SegmentGroup.Root>
    </styled.div>
  )
}

interface ExampleControlsProps {
  id: string
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

export function ExampleControls({ id, onOpenChange, children }: ExampleControlsProps) {
  const { changed } = useExampleControls(id)

  return (
    <Popover.Root
      positioning={{
        placement: "bottom-end",
        getAnchorRect: (element) =>
          (element instanceof HTMLElement
            ? (element.closest("[role=toolbar], [data-controls-anchor]") ?? element)
            : element
          )?.getBoundingClientRect() ?? null,
      }}
      lazyMount
      unmountOnExit
      onOpenChange={(details) => onOpenChange?.(details.open)}
    >
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content w="72" maxH="var(--available-height)" overflowY="auto">
            <Popover.Header display="flex" alignItems="center" justifyContent="space-between">
              <Popover.Title>Settings</Popover.Title>
              <Button variant="plain" size="xs" disabled={!changed} onClick={() => resetControls(id)}>
                Reset
              </Button>
            </Popover.Header>
            <Popover.Body>
              <Section role="group" aria-labelledby={`${id}-behavior`}>
                <Legend id={`${id}-behavior`}>Behavior</Legend>
                <SwitchField id={id} name="infinite" label="Infinite" />
                <SwitchField id={id} name="disabled" label="Disabled" />
                <SwitchField id={id} name="readOnly" label="Read-only" />
                <SwitchField id={id} name="invalid" label="Invalid" />
              </Section>
              <Section role="group" aria-labelledby={`${id}-tuning`}>
                <Legend id={`${id}-tuning`}>Tuning</Legend>
                <SliderField id={id} name="visibleCount" label="Visible count" min={4} max={40} step={4} />
                <SliderField id={id} name="dragSensitivity" label="Drag sensitivity" min={1} max={10} step={1} />
                <SliderField id={id} name="scrollSensitivity" label="Scroll sensitivity" min={1} max={10} step={1} />
              </Section>
              <Section role="group" aria-labelledby={`${id}-style`}>
                <Legend id={`${id}-style`}>Style</Legend>
                <VariantField id={id} />
                <SizeField id={id} />
              </Section>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  )
}
