import { Frame as ArkFrame } from "@ark-ui/solid/frame"
import { styled } from "@isbatak/solid-ui/jsx"
import { frame } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "solid-js"

export const Frame = styled(ArkFrame, frame)
export type FrameProps = ComponentProps<typeof Frame>
