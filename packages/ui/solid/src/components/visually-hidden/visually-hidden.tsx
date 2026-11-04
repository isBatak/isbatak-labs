import { ark } from "@ark-ui/solid/factory"
import { visuallyHidden } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const VisuallyHidden = styled(ark.span, { base: visuallyHidden.raw() })
export type VisuallyHiddenProps = ComponentProps<typeof VisuallyHidden>
