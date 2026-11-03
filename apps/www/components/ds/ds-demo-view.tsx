"use client"

import { examples } from "@isbatak/compositions/react"
import { useEffect, useRef } from "react"

import type { DsFrameworkId } from "./ds-framework"

type MountModule = { mount: (api: "ds", id: string, container: HTMLElement) => () => void }

const loaders: Record<Exclude<DsFrameworkId, "react">, () => Promise<MountModule>> = {
  vue: () => import("@isbatak/compositions/vue"),
  svelte: () => import("@isbatak/compositions/svelte"),
  solid: () => import("@isbatak/compositions/solid"),
}

function MountedDemo({ id, load }: { id: string; load: () => Promise<MountModule> }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let unmount: (() => void) | undefined
    load().then(({ mount }) => {
      if (!cancelled && ref.current) unmount = mount("ds", id, ref.current)
    })
    return () => {
      cancelled = true
      unmount?.()
    }
  }, [id, load])

  return <div ref={ref} />
}

export function DsDemoView({ id, framework }: { id: string; framework: DsFrameworkId }) {
  if (framework !== "react") return <MountedDemo id={id} load={loaders[framework]} />
  const Demo = examples.ds[id]
  return Demo ? <Demo /> : null
}
