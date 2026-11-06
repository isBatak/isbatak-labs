import type { HTMLArkProps } from "@ark-ui/vue/factory"
import { Field } from "@ark-ui/vue/field"
import { input } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { FunctionalComponent } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

export const Input = styled(Field.Input as unknown as FunctionalComponent<HTMLArkProps<"input">>, input)
export type InputProps = ComponentProps<typeof Input>
