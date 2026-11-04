"use client"

import { Highlight as ArkHighlight } from "@ark-ui/react/highlight"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { mark } from "@isbatak/panda-ds/recipes"

export const Highlight = styled(ArkHighlight, mark)
export type HighlightProps = ComponentProps<typeof Highlight>
