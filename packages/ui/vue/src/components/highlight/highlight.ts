import { Highlight as ArkHighlight } from "@ark-ui/vue/highlight"
import { mark } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Highlight = styled(ArkHighlight, mark)
export type HighlightProps = ComponentProps<typeof Highlight>
