"use client"

import { useCallback, useRef, useState } from "react"

export interface UseControllableStateProps<T> {
  value?: T | undefined
  defaultValue: T
  onChange?: ((value: T) => void) | undefined
}

export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const { value: valueProp, defaultValue, onChange } = props
  const [uncontrolled, setUncontrolled] = useState(defaultValue)
  const controlled = valueProp !== undefined
  const value = controlled ? valueProp : uncontrolled

  const latest = useRef({ value, controlled, onChange })
  latest.current = { value, controlled, onChange }

  const setValue = useCallback((next: T) => {
    const { value, controlled, onChange } = latest.current
    if (Object.is(value, next)) return
    if (!controlled) setUncontrolled(next)
    onChange?.(next)
  }, [])

  return [value, setValue] as const
}

export function useLiveRef<T>(value: T) {
  const ref = useRef(value)
  ref.current = value
  return ref
}
