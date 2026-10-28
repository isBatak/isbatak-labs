import { styled } from "@isbatak/panda-ds/jsx"
import type { ComponentProps } from "react"

export interface WordmarkProps extends ComponentProps<typeof styled.span> {
  product?: string | undefined
}

export function Wordmark({ product = "labs", ...props }: WordmarkProps) {
  return (
    <styled.span color="fg" letterSpacing="tight" whiteSpace="nowrap" {...props}>
      <styled.span fontWeight="bold">isBatak</styled.span>
      <styled.span fontWeight="light">/{product}</styled.span>
    </styled.span>
  )
}
