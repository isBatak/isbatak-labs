import { normalizeProps, useMachine } from "@zag-js/react"
import { useEffect, useId, useLayoutEffect, useRef } from "react"
import type { Controller, ControllerPrimitive, MachinePrimitive, Primitive } from "./define-primitive"
import type { AnyRecord } from "./types"

type UseApi = (own: AnyRecord) => AnyRecord

function machineHook(primitive: MachinePrimitive): UseApi {
  return function useMachineApi(own) {
    const id = useId()
    const service = useMachine(primitive.machine, { id, ...own })
    return primitive.connect(service, normalizeProps) as AnyRecord
  }
}

function controllerHook(primitive: ControllerPrimitive): UseApi {
  return function useControllerApi(own) {
    const id = useId()
    const props = { id, ...own }
    const controllerRef = useRef<Controller | null>(null)
    controllerRef.current ??= primitive.create()
    const controller = controllerRef.current
    const latest = useRef(props)
    latest.current = props
    useEffect(() => controller.mount?.(() => latest.current), [controller])
    useLayoutEffect(() => {
      controller.sync?.(latest.current)
    })
    return controller.connect(props, normalizeProps) as AnyRecord
  }
}

export function apisOf(primitive: Primitive): { useApi: UseApi; standalone: AnyRecord | undefined } {
  if ("machine" in primitive) {
    return {
      useApi: machineHook(primitive),
      standalone: primitive.standalone
        ? (primitive.connect(undefined as never, normalizeProps) as AnyRecord)
        : undefined,
    }
  }
  if ("create" in primitive) return { useApi: controllerHook(primitive), standalone: undefined }
  const api = primitive.connect(normalizeProps) as AnyRecord
  return { useApi: () => api, standalone: api }
}
