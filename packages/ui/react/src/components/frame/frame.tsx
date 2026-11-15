import { Frame as ArkFrame } from "@ark-ui/react/frame"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { frame } from "@isbatak/panda-ds/recipes"

export const Frame = styled(ArkFrame, frame)
export type FrameProps = ComponentProps<typeof Frame>
