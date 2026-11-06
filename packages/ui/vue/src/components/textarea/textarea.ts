import type { HTMLArkProps } from "@ark-ui/vue/factory"
import { Field } from "@ark-ui/vue/field"
import { textarea } from "@isbatak/panda-ds/recipes"
import { styled } from "@isbatak/vue-ui/jsx"
import type { FunctionalComponent } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"

export const Textarea = styled(Field.Textarea as unknown as FunctionalComponent<HTMLArkProps<"textarea">>, textarea)
export type TextareaProps = ComponentProps<typeof Textarea>
