import { ark } from "@ark-ui/solid/factory"
import { link } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

export const Link = styled(ark.a, link)
export type LinkProps = ComponentProps<typeof Link>
