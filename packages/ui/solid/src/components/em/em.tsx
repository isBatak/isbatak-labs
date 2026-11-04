import { ark } from "@ark-ui/solid/factory"
import { em } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Em = styled(ark.em, em)
export type EmProps = ComponentProps<typeof Em>
