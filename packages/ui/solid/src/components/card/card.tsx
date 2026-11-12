import { ark } from "@ark-ui/solid/factory"
import { card } from "@isbatak/panda-ds/recipes"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
import type { ComponentProps } from "solid-js"

const { withProvider, withContext, PropsProvider } = createSlotRecipeContext(card)

export const CardRoot = withProvider(ark.div, "root")
export type CardRootProps = ComponentProps<typeof CardRoot>

export const CardPropsProvider = PropsProvider

export const CardHeader = withContext(ark.div, "header")
export type CardHeaderProps = ComponentProps<typeof CardHeader>

export const CardBody = withContext(ark.div, "body")
export type CardBodyProps = ComponentProps<typeof CardBody>

export const CardFooter = withContext(ark.div, "footer")
export type CardFooterProps = ComponentProps<typeof CardFooter>

export const CardTitle = withContext(ark.h3, "title")
export type CardTitleProps = ComponentProps<typeof CardTitle>

export const CardDescription = withContext(ark.p, "description")
export type CardDescriptionProps = ComponentProps<typeof CardDescription>
