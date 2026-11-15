"use client"

import { ark } from "@ark-ui/react/factory"
import { createRecipeContext } from "@isbatak/panda-ds/jsx"
import { beacon } from "@isbatak/panda-ds/recipes"
import type { ComponentProps } from "react"

const { withContext, PropsProvider } = createRecipeContext(beacon)

export const Beacon = withContext(ark.div)
export type BeaconProps = ComponentProps<typeof Beacon>

export const BeaconPropsProvider = PropsProvider
