import { Highlight as ArkHighlight } from "@ark-ui/solid/highlight"
import { mark } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Highlight = styled(ArkHighlight, mark)
export type HighlightProps = ComponentProps<typeof Highlight>
