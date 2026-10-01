"use client"

import { SegmentGroup } from "@isbatak/react-ui/segment-group"

import { useDocVariant } from "./doc-variant"
import { useFramework } from "./framework"
import { createPreference } from "./preference"
import { API_KEY, type ApiId, apiIds, defaultVariant, supportsApi } from "./variant"

export type { ApiId }

const useApiPreference = createPreference(API_KEY, apiIds, defaultVariant.api)

export function useApi() {
  const [preference, setPreference] = useApiPreference()
  const { variant, setVariant } = useDocVariant()
  const { framework } = useFramework()

  const setApi = (api: ApiId) => {
    setPreference(api)
    setVariant({ api })
  }

  const api = variant?.api ?? (supportsApi(framework, preference) ? preference : "zag")

  return { api, setApi, arkSupported: supportsApi(framework, "ark") }
}

export function ApiPicker() {
  const { api, setApi, arkSupported } = useApi()

  return (
    <SegmentGroup.Root
      size="xs"
      orientation="horizontal"
      aria-label="API"
      value={api}
      onValueChange={(details) => details.value && setApi(details.value as ApiId)}
    >
      <SegmentGroup.Indicator />
      <SegmentGroup.Item value="zag">
        <SegmentGroup.ItemText>Zag</SegmentGroup.ItemText>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
      <SegmentGroup.Item
        value="ark"
        disabled={!arkSupported}
        title={arkSupported ? undefined : "Ark UI has no adapter for this framework"}
      >
        <SegmentGroup.ItemText>Ark UI</SegmentGroup.ItemText>
        <SegmentGroup.ItemHiddenInput />
      </SegmentGroup.Item>
    </SegmentGroup.Root>
  )
}
