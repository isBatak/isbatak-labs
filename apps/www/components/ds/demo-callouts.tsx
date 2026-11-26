"use client"

import { IconButton } from "@isbatak/react-ui/button"
import { type ReactNode, useEffect, useRef, useState } from "react"

import {
  CaliperCallout,
  CaliperCalloutLabel,
  CaliperCalloutTitle,
  CaliperFrame,
  CaliperOverlayTrigger,
  CaliperRoot,
  CaliperSubject,
} from "../ui/caliper/caliper"
import { Icon } from "../ui/icon"

export interface DemoCalloutsConfig {
  target: string
  labels: string[]
}

interface Anchor {
  x: number
  y: number
}

const LEADER_LENGTH = 24

export function DemoCallouts({ target, labels, children }: DemoCalloutsConfig & { children: ReactNode }) {
  const subjectRef = useRef<HTMLDivElement>(null)
  const [anchors, setAnchors] = useState<Anchor[]>([])

  useEffect(() => {
    const subject = subjectRef.current
    if (!subject) return

    const measure = () => {
      const box = subject.getBoundingClientRect()
      const next = Array.from(subject.querySelectorAll(target), (element) => {
        const rect = element.getBoundingClientRect()
        return { x: Math.round(rect.left - box.left), y: Math.round(rect.top - box.top + rect.height / 2) }
      })
      setAnchors((current) =>
        current.length === next.length && current.every((a, i) => a.x === next[i].x && a.y === next[i].y)
          ? current
          : next,
      )
    }

    const resize = new ResizeObserver(measure)
    resize.observe(subject)
    const mutation = new MutationObserver(measure)
    mutation.observe(subject, { childList: true, subtree: true })
    measure()

    return () => {
      resize.disconnect()
      mutation.disconnect()
    }
  }, [target])

  return (
    <CaliperRoot defaultOverlay={false} display="contents">
      <CaliperFrame>
        <CaliperSubject ref={subjectRef}>{children}</CaliperSubject>
        {anchors.slice(0, labels.length).map((anchor, index) => (
          <CaliperCallout key={labels[index]} anchors={[anchor]} to={{ x: anchor.x - LEADER_LENGTH, y: anchor.y }}>
            <CaliperCalloutLabel>
              <CaliperCalloutTitle mb="0">{labels[index]}</CaliperCalloutTitle>
            </CaliperCalloutLabel>
          </CaliperCallout>
        ))}
      </CaliperFrame>
      <CaliperOverlayTrigger asChild>
        <IconButton
          variant={{ base: "ghost", _pressed: "surface" }}
          size="sm"
          colorPalette="gray"
          color="fg.subtle"
          _pressed={{ color: "fg" }}
          aria-label="Show labels"
        >
          <Icon name="info-circle" />
        </IconButton>
      </CaliperOverlayTrigger>
    </CaliperRoot>
  )
}
