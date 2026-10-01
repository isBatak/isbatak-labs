"use client"

import { setControls } from "@isbatak/compositions/react"
import { useSyncExternalStore } from "react"

import {
  type ControlName,
  type ControlValues,
  controlDefaults,
  type ExampleSettings,
  recipeControlNames,
} from "./controls"

const recipeControls = new Set(recipeControlNames)

interface ExampleState {
  values: ControlValues
  overrides: Partial<ControlValues>
  settings: ExampleSettings
  changed: boolean
  version: number
}

const overrides = new Map<string, Partial<ControlValues>>()
const settings = new Map<string, ExampleSettings>()
const states = new Map<string, ExampleState>()
const listeners = new Set<() => void>()

const initialState: ExampleState = { values: controlDefaults, overrides: {}, settings: {}, changed: false, version: 0 }

function update(id: string, bump = false) {
  const own = settings.get(id) ?? {}
  const changed = overrides.get(id) ?? {}
  const version = (states.get(id)?.version ?? 0) + (bump ? 1 : 0)
  states.set(id, {
    values: { ...controlDefaults, ...own, ...changed },
    overrides: changed,
    settings: own,
    changed: Object.keys(changed).length > 0,
    version,
  })
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function apply(id: string) {
  const entries = Object.entries(overrides.get(id) ?? {}) as [ControlName, unknown][]
  setControls(id, {
    props: Object.fromEntries(entries.filter(([name]) => !recipeControls.has(name))),
    recipe: Object.fromEntries(entries.filter(([name]) => recipeControls.has(name))) as Record<string, string>,
  })
  update(id, true)
}

export function registerSettings(id: string, value: ExampleSettings) {
  settings.set(id, value)
  update(id)
  return () => {
    settings.delete(id)
    update(id)
  }
}

export function setControl<N extends ControlName>(id: string, name: N, value: ControlValues[N]) {
  overrides.set(id, { ...overrides.get(id), [name]: value })
  apply(id)
}

export function resetControls(id: string) {
  overrides.delete(id)
  apply(id)
}

export function resetAllControls() {
  for (const id of overrides.keys()) resetControls(id)
}

export function useExampleControls(id: string) {
  return useSyncExternalStore(
    subscribe,
    () => states.get(id) ?? initialState,
    () => initialState,
  )
}
