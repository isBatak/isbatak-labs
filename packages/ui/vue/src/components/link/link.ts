import { ark } from "@ark-ui/vue/factory"
import { link } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Link = styled(ark.a, link)
export type LinkProps = ComponentProps<typeof Link>
