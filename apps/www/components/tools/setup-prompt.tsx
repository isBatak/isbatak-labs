import type { ReactNode } from "react"
import { styled } from "styled-system/jsx"

import { CodeFrame, CodeHeader } from "../code/code-block"
import { Icon } from "../ui/icon"
import { readCode } from "./code-files"
import { CopyPromptButton } from "./copy-prompt-button"

const Summary = styled("summary", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1.5",
    px: "4",
    py: "2.5",
    listStyle: "none",
    cursor: "pointer",
    textStyle: "xs",
    color: "fg.muted",
    _hover: { color: "fg" },
    "&::-webkit-details-marker": { display: "none" },
    "& svg": { transitionProperty: "transform", transitionDuration: "fast" },
    "[open] > &": { "& svg": { transform: "rotate(180deg)" } },
  },
})

const PromptText = styled("pre", {
  base: {
    m: "0",
    px: "4",
    pb: "4",
    maxH: "96",
    overflowY: "auto",
    whiteSpace: "pre-wrap",
    fontFamily: "mono",
    fontSize: "0.8125rem",
    lineHeight: "1.7",
    color: "fg.muted",
  },
})

export function SetupPrompt({ children }: { children: ReactNode }) {
  const { code } = readCode(children)
  const prompt = code.trimEnd()

  return (
    <CodeFrame>
      <CodeHeader>
        <styled.span display="flex" alignItems="center" gap="2">
          <Icon name="sparkles" />
          Prompt for your coding agent
        </styled.span>
        <CopyPromptButton value={prompt} />
      </CodeHeader>
      <details>
        <Summary>
          Show prompt
          <Icon name="chevron-down" />
        </Summary>
        <PromptText>{prompt}</PromptText>
      </details>
    </CodeFrame>
  )
}
