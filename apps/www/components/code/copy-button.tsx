"use client"

import { useTabsContext } from "@ark-ui/react/tabs"
import { Button } from "@isbatak/react-ui/button"
import { useEffect, useState } from "react"

import { Icon } from "../ui/icon"

export function useCopy(value: string) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => setCopied(false), 1500)
    return () => clearTimeout(timeout)
  }, [copied])

  const copy = () => navigator.clipboard.writeText(value).then(() => setCopied(true))
  return { copied, copy }
}

export function CopyButton({ value }: { value: string }) {
  const { copied, copy } = useCopy(value)

  return (
    <Button
      variant="ghost"
      size="xs"
      px="0"
      aspectRatio="square"
      color="fg.muted"
      aria-label={copied ? "Copied" : "Copy code"}
      onClick={copy}
    >
      <Icon name={copied ? "check" : "copy"} />
    </Button>
  )
}

export function TabsCopyButton({ files }: { files: Record<string, string> }) {
  const { value } = useTabsContext()
  return <CopyButton value={files[value ?? ""] ?? ""} />
}
