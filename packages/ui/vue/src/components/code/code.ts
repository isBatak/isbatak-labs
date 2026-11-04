import { ark } from "@ark-ui/vue/factory"
import { code } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { ComponentProps } from "vue-component-type-helpers"

export const Code = styled(ark.code, code)
export type CodeProps = ComponentProps<typeof Code>
