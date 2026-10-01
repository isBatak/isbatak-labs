"use client"

import { Button, type ButtonProps } from "@isbatak/react-ui/button"
import { SegmentGroup } from "@isbatak/react-ui/segment-group"
import { Slider } from "@isbatak/react-ui/slider"
import { Switch } from "@isbatak/react-ui/switch"
import { type ReactNode, startTransition, useEffect, useId, useRef, useState, ViewTransition } from "react"
import { viewTransition } from "styled-system/css"
import { styled } from "styled-system/jsx"

import { Icon } from "../ui/icon"

import type { ControlValues } from "./controls"
import { resetControls, setControl, useExampleControls } from "./controls-store"

type BooleanControl = { [N in keyof ControlValues]: ControlValues[N] extends boolean ? N : never }[keyof ControlValues]
type NumberControl = { [N in keyof ControlValues]: ControlValues[N] extends number ? N : never }[keyof ControlValues]

const Section = styled("div", {
  base: {
    display: "grid",
    gap: "3",
    alignContent: "start",
  },
})

const SectionTitle = styled("p", {
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

function ControlsPanel({ id }: { id: string }) {
  return (
    <styled.div display="grid" gridTemplateColumns="repeat(auto-fit, minmax(13rem, 1fr))" columnGap="8" rowGap="6">
      <Section role="group" aria-labelledby={`${id}-behavior`}>
        <SectionTitle id={`${id}-behavior`}>Behavior</SectionTitle>
        <SwitchField id={id} name="infinite" label="Infinite" />
        <SwitchField id={id} name="disabled" label="Disabled" />
        <SwitchField id={id} name="readOnly" label="Read-only" />
        <SwitchField id={id} name="invalid" label="Invalid" />
      </Section>
      <Section role="group" aria-labelledby={`${id}-tuning`}>
        <SectionTitle id={`${id}-tuning`}>Tuning</SectionTitle>
        <SliderField id={id} name="visibleCount" label="Visible count" min={4} max={40} step={4} />
        <SliderField id={id} name="dragSensitivity" label="Drag sensitivity" min={1} max={10} step={1} />
        <SliderField id={id} name="scrollSensitivity" label="Scroll sensitivity" min={1} max={10} step={1} />
      </Section>
      <Section role="group" aria-labelledby={`${id}-style`}>
        <SectionTitle id={`${id}-style`}>Style</SectionTitle>
        <VariantField id={id} />
        <SizeField id={id} />
      </Section>
    </styled.div>
  )
}

function ToggleButton(props: ButtonProps) {
  return <Button variant="outline" size="sm" px="0" aspectRatio="square" bg="bg" {...props} />
}

interface ExampleControlsProps {
  id: string
  pickers?: ReactNode
}

export function ExampleControls({ id, pickers }: ExampleControlsProps) {
  const [open, setOpen] = useState(false)
  const { changed } = useExampleControls(id)
  const name = useId().replace(/[^\w-]/g, "")
  const drawerId = `${name}-drawer`
  const toggleRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const opened = useRef(false)

  useEffect(() => {
    if (open) closeRef.current?.focus()
    else if (opened.current) toggleRef.current?.focus()
    opened.current = open
  }, [open])

  const change = (next: boolean) => startTransition(() => setOpen(next))

  const pickerGroup = pickers && (
    <ViewTransition name={`${name}-pickers`} share={viewTransition("morph")}>
      <styled.div display="flex" flexWrap="wrap" gap="2">
        {pickers}
      </styled.div>
    </ViewTransition>
  )

  if (!open) {
    return (
      <>
        {pickerGroup && (
          <styled.div position="absolute" bottom="3" insetStart="3" zIndex="1">
            {pickerGroup}
          </styled.div>
        )}
        <styled.div position="absolute" bottom="3" insetEnd="3" zIndex="1">
          <ViewTransition name={`${name}-toggle`} share={viewTransition("morph")}>
            <ToggleButton
              ref={toggleRef}
              aria-label="Show settings"
              aria-expanded={false}
              aria-controls={drawerId}
              onClick={() => change(true)}
            >
              <Icon size="md" name="settings" />
            </ToggleButton>
          </ViewTransition>
        </styled.div>
      </>
    )
  }

  return (
    <ViewTransition enter={viewTransition("drawer-slide")} exit={viewTransition("drawer-slide")}>
      <styled.section
        id={drawerId}
        aria-label="Example settings"
        position="relative"
        zIndex="1"
        flexShrink="0"
        maxH="60%"
        overflowY="auto"
        overscrollBehavior="contain"
        m="3"
        mt="0"
        p="4"
        borderRadius="l3"
        borderWidth="1px"
        bg="bg"
        boxShadow="md"
        onKeyDown={(event) => {
          if (event.key !== "Escape") return
          event.stopPropagation()
          change(false)
        }}
      >
        <styled.div display="flex" alignItems="center" gap="2" mb="5">
          {pickerGroup ?? (
            <styled.p textStyle="sm" fontWeight="medium">
              Settings
            </styled.p>
          )}
          <styled.div display="flex" alignItems="center" gap="1" ms="auto">
            <Button variant="plain" size="xs" disabled={!changed} onClick={() => resetControls(id)}>
              Reset
            </Button>
            <ViewTransition name={`${name}-toggle`} share={viewTransition("morph")}>
              <ToggleButton
                ref={closeRef}
                aria-label="Hide settings"
                aria-expanded
                aria-controls={drawerId}
                onClick={() => change(false)}
              >
                <Icon size="md" name="x" />
              </ToggleButton>
            </ViewTransition>
          </styled.div>
        </styled.div>
        <ControlsPanel id={id} />
      </styled.section>
    </ViewTransition>
  )
}
