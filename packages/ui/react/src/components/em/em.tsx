import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { em } from "@isbatak/panda-ds/recipes"

export const Em = styled(ark.em, em)
export type EmProps = ComponentProps<typeof Em>
