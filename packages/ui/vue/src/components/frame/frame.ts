import { Frame as ArkFrame } from "@ark-ui/vue/frame"
import { styled } from "@isbatak/vue-ui/jsx"
import { frame } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "vue-component-type-helpers"

export const Frame = styled(ArkFrame, frame)
export type FrameProps = ComponentProps<typeof Frame>
