"use client"

import { Slider } from "@isbatak/react-ui/slider"
import { Switch } from "@isbatak/react-ui/switch"
import { Table } from "@isbatak/react-ui/table"
import { type CSSProperties, type RefObject, useLayoutEffect, useRef, useState } from "react"
import { styled } from "styled-system/jsx"

interface Settings {
  radius: number
  paddingX: number
  paddingY: number
  border: number
  levels: number
  elliptical: boolean
  floor: boolean
}

const FLOOR = 4

function ValueSlider({
  label,
  value,
  max,
  min = 0,
  unit = "px",
  onChange,
}: {
  label: string
  value: number
  max: number
  min?: number
  unit?: string
  onChange: (value: number) => void
}) {
  return (
    <Slider.Root value={[value]} min={min} max={max} onValueChange={(details) => onChange(details.value[0] ?? 0)}>
      <styled.div display="flex" justifyContent="space-between" textStyle="sm">
        <Slider.Label>{label}</Slider.Label>
        <styled.span fontFamily="mono" color="fg.muted">
          {value}
          {unit}
        </styled.span>
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

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <Switch.Root checked={checked} onCheckedChange={(details) => onChange(details.checked)}>
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>{label}</Switch.Label>
      <Switch.HiddenInput />
    </Switch.Root>
  )
}

function Level({
  depth,
  settings,
  refs,
}: {
  depth: number
  settings: Settings
  refs: RefObject<(HTMLDivElement | null)[]>
}) {
  if (depth > settings.levels) return null
  const innermost = depth === settings.levels

  return (
    <styled.div
      ref={(element) => {
        refs.current[depth] = element
      }}
      rounded="concentric"
      concentricElliptical={settings.elliptical ? true : undefined}
      px="var(--lab-px)"
      py="var(--lab-py)"
      minH={innermost ? "12" : undefined}
      bg="colorPalette.solid/16"
    >
      <Level depth={depth + 1} settings={settings} refs={refs} />
    </styled.div>
  )
}

function expected(settings: Settings) {
  const floor = settings.floor ? FLOOR : 0
  const rows = [{ x: settings.radius, y: settings.radius, formula: "set on the root" }]
  for (let depth = 1; depth <= settings.levels; depth++) {
    const parent = rows[depth - 1]!
    const border = depth === 1 ? settings.border : 0
    const gapX = settings.paddingX + border
    const gapY = settings.paddingY + border
    if (settings.elliptical) {
      const x = Math.max(floor, parent.x - gapX)
      const y = Math.max(floor, parent.y - gapY)
      rows.push({ x, y, formula: `${parent.x} − ${gapX} / ${parent.y} − ${gapY}` })
    } else {
      const gap = Math.min(gapX, gapY)
      const r = Math.max(floor, Math.max(parent.x, parent.y) - gap)
      rows.push({ x: r, y: r, formula: `${Math.max(parent.x, parent.y)} − ${gap} = ${r}` })
    }
  }
  return rows
}

const format = (x: number, y: number) => (x === y ? `${x}px` : `${x}px ${y}px`)

export function ConcentricPlaygroundDemo() {
  const [settings, setSettings] = useState<Settings>({
    radius: 64,
    paddingX: 20,
    paddingY: 20,
    border: 0,
    levels: 3,
    elliptical: false,
    floor: false,
  })
  const refs = useRef<(HTMLDivElement | null)[]>([])
  const [computed, setComputed] = useState<string[]>([])

  const update =
    <K extends keyof Settings>(key: K) =>
    (value: Settings[K]) =>
      setSettings((current) => ({ ...current, [key]: value }))

  useLayoutEffect(() => {
    setComputed(
      Array.from({ length: settings.levels + 1 }, (_, depth) => {
        const element = refs.current[depth]
        return element ? getComputedStyle(element).borderTopLeftRadius : ""
      }),
    )
  }, [settings])

  const rows = expected(settings)
  const vars = {
    "--lab-r": `${settings.radius}px`,
    "--lab-px": `${settings.paddingX}px`,
    "--lab-py": `${settings.paddingY}px`,
    "--lab-bw": `${settings.border}px`,
  } as CSSProperties

  return (
    <styled.div
      display="grid"
      gridTemplateColumns={{ base: "1fr", md: "16rem minmax(0, 1fr)" }}
      gap="8"
      w="full"
      alignItems="start"
    >
      <styled.div display="grid" gap="5">
        <ValueSlider label="Outer radius" value={settings.radius} max={96} onChange={update("radius")} />
        <ValueSlider label="Padding x" value={settings.paddingX} max={40} onChange={update("paddingX")} />
        <ValueSlider label="Padding y" value={settings.paddingY} max={40} onChange={update("paddingY")} />
        <ValueSlider label="Border width" value={settings.border} max={8} onChange={update("border")} />
        <ValueSlider
          label="Nested levels"
          value={settings.levels}
          min={1}
          max={5}
          unit=""
          onChange={update("levels")}
        />
        <Toggle label="Elliptical" checked={settings.elliptical} onChange={update("elliptical")} />
        <Toggle label={`Floor ${FLOOR}px`} checked={settings.floor} onChange={update("floor")} />
      </styled.div>

      <styled.div display="grid" gap="6" minW="0">
        <styled.div
          ref={(element) => {
            refs.current[0] = element
          }}
          style={vars}
          concentricFloor={settings.floor ? "sm" : undefined}
          rounded="var(--lab-r)"
          px="var(--lab-px)"
          py="var(--lab-py)"
          borderWidth="var(--lab-bw)"
          borderColor="colorPalette.solid"
          bg="colorPalette.solid/8"
        >
          <Level depth={1} settings={settings} refs={refs} />
        </styled.div>

        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Level</Table.ColumnHeader>
              <Table.ColumnHeader>Computed</Table.ColumnHeader>
              <Table.ColumnHeader>Expected</Table.ColumnHeader>
              <Table.ColumnHeader>Formula</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows.map((row, depth) => (
              <Table.Row key={depth}>
                <Table.Cell>L{depth + 1}</Table.Cell>
                <Table.Cell fontFamily="mono">{computed[depth] ?? "…"}</Table.Cell>
                <Table.Cell fontFamily="mono">{format(row.x, row.y)}</Table.Cell>
                <Table.Cell color="fg.muted">{row.formula}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </styled.div>
    </styled.div>
  )
}
