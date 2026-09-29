"use client"

import { Button } from "@isbatak/react-ui/button"

import { useCopy } from "../code/copy-button"
import { Icon } from "../ui/icon"

export function CopyPromptButton({ value }: { value: string }) {
  const { copied, copy } = useCopy(value)

  return (
    <Button variant="solid" size="xs" onClick={copy}>
      <Icon name={copied ? "check" : "copy"} />
      {copied ? "Copied" : "Copy prompt"}
    </Button>
  )
}
