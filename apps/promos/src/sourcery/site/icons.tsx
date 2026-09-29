import type { ReactNode } from "react"
import { css } from "@isbatak/panda-ds/css"

const icon = css({ width: "1em", height: "1em", flexShrink: "0" })

function Svg({ children, size }: { children: ReactNode; size?: number | undefined }) {
  return (
    <svg
      className={icon}
      style={size ? { width: size, height: size } : undefined}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export function GithubIcon() {
  return (
    <Svg>
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </Svg>
  )
}

export function ChevronRightIcon() {
  return (
    <Svg>
      <path d="M9 6l6 6l-6 6" />
    </Svg>
  )
}

export function CopyIcon() {
  return (
    <Svg>
      <path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666" />
      <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
    </Svg>
  )
}

export function NpmIcon() {
  return (
    <Svg>
      <path d="M1 8h22v7h-12v2h-4v-2h-6l0 -7" />
      <path d="M7 8v7" />
      <path d="M14 8v7" />
      <path d="M17 11v4" />
      <path d="M4 11v4" />
      <path d="M11 11v1" />
      <path d="M20 11v4" />
    </Svg>
  )
}

export function ArrowUpRightIcon() {
  return (
    <Svg>
      <path d="M17 7l-10 10" />
      <path d="M8 7l9 0l0 9" />
    </Svg>
  )
}

export function PlayIcon() {
  return (
    <Svg>
      <path d="M7 4v16l13 -8l-13 -8" />
    </Svg>
  )
}

export function ContrastIcon() {
  return (
    <Svg>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 17a5 5 0 0 0 0 -10v10" />
    </Svg>
  )
}

export function PointerIcon() {
  return (
    <Svg>
      <path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563" />
    </Svg>
  )
}

export function VscodeIcon({ size }: { size?: number | undefined }) {
  return (
    <Svg size={size}>
      <path d="M16 3v18l4 -2.5v-13l-4 -2.5" />
      <path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141" />
      <path d="M16 16.5l-11 -10l-2 1l13 13.5" />
    </Svg>
  )
}

export function FileIcon() {
  return (
    <Svg>
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
    </Svg>
  )
}
