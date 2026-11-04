import { ark } from "@ark-ui/vue/factory"
import { visuallyHidden } from "@isbatak/panda-ds/patterns"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const VisuallyHidden = styled(ark.span, { base: visuallyHidden.raw() })
export type VisuallyHiddenProps = ComponentProps<typeof VisuallyHidden>
