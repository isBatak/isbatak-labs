"use client"

import { startTransition, useCallback, useEffect, useRef, useState } from "react"

import { useLiveRef } from "./use-controllable-state"

export type AsyncListDependency = string | number | boolean | null | undefined

export interface AsyncListLoadDetails<C = string> {
  filterText: string
  signal: AbortSignal
  cursor?: C | undefined
}

export interface AsyncListLoadResult<T, C = string> {
  /**
   * The loaded items.
   */
  items: T[]
  /**
   * Where the next page starts. Leave it out when there are no more pages.
   */
  cursor?: C | undefined
}

export interface UseAsyncListProps<T, C = string> {
  filterText?: string | undefined
  load?: ((details: AsyncListLoadDetails<C>) => Promise<T[] | AsyncListLoadResult<T, C>>) | undefined
  dependencies?: AsyncListDependency[] | undefined
}

export interface UseAsyncListReturn<T> {
  items: T[]
  loading: boolean
  error: Error | undefined
  hasMore: boolean
  loadMore: VoidFunction
  reload: VoidFunction
}

interface AsyncListResult<T, C> {
  depsKey: string
  items: T[]
  cursor: C | undefined
}

const EMPTY: never[] = []

export function useAsyncList<T, C = string>(props: UseAsyncListProps<T, C>): UseAsyncListReturn<T> {
  const { filterText = "", load, dependencies = EMPTY } = props
  const depsKey = JSON.stringify(dependencies)

  const [result, setResult] = useState<AsyncListResult<T, C>>({ depsKey, items: [], cursor: undefined })
  const [pending, setPending] = useState(!!load)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [attempt, setAttempt] = useState(0)

  const loadRef = useLiveRef(load)
  const stateRef = useLiveRef({ filterText, depsKey, pending, result })
  const controllerRef = useRef<AbortController | null>(null)

  const start = useCallback(
    (options: { cursor: C | undefined; append: boolean }) => {
      const load = loadRef.current
      if (!load) return

      controllerRef.current?.abort()
      const controller = new AbortController()
      controllerRef.current = controller

      const { filterText, depsKey } = stateRef.current
      setPending(true)

      load({ filterText, signal: controller.signal, cursor: options.cursor }).then(
        (data) => {
          if (controller.signal.aborted) return
          const page = Array.isArray(data) ? { items: data, cursor: undefined } : data
          startTransition(() => {
            setResult((prev) => ({
              depsKey,
              items: options.append ? [...prev.items, ...page.items] : page.items,
              cursor: page.cursor,
            }))
            setError(undefined)
            setPending(false)
          })
        },
        (reason: unknown) => {
          if (controller.signal.aborted) return
          if (!options.append) setResult({ depsKey, items: [], cursor: undefined })
          setError(reason instanceof Error ? reason : new Error(String(reason)))
          setPending(false)
        },
      )

      return controller
    },
    [loadRef, stateRef],
  )

  useEffect(() => {
    const controller = start({ cursor: undefined, append: false })
    return () => controller?.abort()
  }, [filterText, attempt, depsKey, start])

  const loadMore = useCallback(() => {
    const { pending, result, depsKey } = stateRef.current
    if (pending || result.depsKey !== depsKey || result.cursor == null) return
    start({ cursor: result.cursor, append: true })
  }, [start, stateRef])

  const reload = useCallback(() => setAttempt((count) => count + 1), [])

  const stale = result.depsKey !== depsKey
  const items = stale ? EMPTY : result.items
  const cursor = stale ? undefined : result.cursor

  return {
    items,
    loading: pending || (!!load && stale),
    error,
    hasMore: cursor != null,
    loadMore,
    reload,
  }
}
