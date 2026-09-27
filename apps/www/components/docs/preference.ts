"use client"

import { useSyncExternalStore } from "react"

const ONE_YEAR = 60 * 60 * 24 * 365

const listeners = new Set<() => void>()
const written = new Map<string, string>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function readCookie(key: string) {
  const prefix = `${key}=`
  return (
    document.cookie
      .split("; ")
      .find((entry) => entry.startsWith(prefix))
      ?.slice(prefix.length) ?? null
  )
}

function readStored(key: string) {
  return written.get(key) ?? readCookie(key)
}

function writeStored(key: string, value: string) {
  written.set(key, value)
  document.cookie = `${key}=${value}; path=/; max-age=${ONE_YEAR}; samesite=lax`
  for (const listener of listeners) listener()
}

export function createPreference<T extends string, F extends T | null>(
  storageKey: string,
  values: readonly T[],
  fallback: F,
) {
  const isValue = (value: unknown): value is T => values.includes(value as T)
  const getSnapshot = (): T | F => {
    const stored = readStored(storageKey)
    return isValue(stored) ? stored : fallback
  }
  const getServerSnapshot = () => fallback
  const setValue = (value: T) => writeStored(storageKey, value)

  return function usePreference() {
    const value = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    return [value, setValue] as const
  }
}
