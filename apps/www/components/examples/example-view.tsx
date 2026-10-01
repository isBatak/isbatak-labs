"use client"

import { examples } from "@isbatak/compositions/react"
import { useEffect, useRef } from "react"

import { type ApiId, useApi } from "../docs/api"
import { type FrameworkId, useFramework } from "../docs/framework"
import { useExampleControls } from "./controls-store"
import { DemoFrame } from "./demo-frame"

type MountModule = { mount: (api: ApiId, id: string, container: HTMLElement) => () => void }

const loaders: Record<Exclude<FrameworkId, "react">, () => Promise<MountModule>> = {
  vue: () => import("@isbatak/compositions/vue"),
  svelte: () => import("@isbatak/compositions/svelte"),
  solid: () => import("@isbatak/compositions/solid"),
  preact: () => import("@isbatak/compositions/preact"),
  vanilla: () => import("@isbatak/compositions/vanilla"),
}

function MountedExample({ api, id, load }: { api: ApiId; id: string; load: () => Promise<MountModule> }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false
    let unmount: (() => void) | undefined
    load().then(({ mount }) => {
      if (!cancelled && ref.current) unmount = mount(api, id, ref.current)
    })
    return () => {
      cancelled = true
      unmount?.()
    }
  }, [api, id, load])

  return <div ref={ref} />
}

export function ExampleView({ id }: { id: string }) {
  const { framework } = useFramework()
  const { api } = useApi()
  const { version } = useExampleControls(id)
  const Example = examples[api][id]

  return (
    <DemoFrame>
      {framework === "react" ? (
        Example && <Example key={version} />
      ) : (
        <MountedExample key={`${framework}-${api}-${version}`} api={api} id={id} load={loaders[framework]} />
      )}
    </DemoFrame>
  )
}

export function ExampleThumbnail({ id }: { id: string }) {
  const Example = examples.zag[id]

  return (
    <DemoFrame inert aria-hidden>
      {Example && <Example />}
    </DemoFrame>
  )
}
