import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { visuallyHidden } from "@isbatak/panda-ds/patterns"

export const VisuallyHidden = styled(ark.span, { base: visuallyHidden.raw() })
export type VisuallyHiddenProps = ComponentProps<typeof VisuallyHidden>
