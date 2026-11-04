import { ark } from "@ark-ui/react/factory"
import type { ComponentProps } from "react"
import { styled } from "@isbatak/panda-ds/jsx"
import { link } from "@isbatak/panda-ds/recipes"

export const Link = styled(ark.a, link)
export type LinkProps = ComponentProps<typeof Link>
