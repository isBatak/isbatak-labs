"use client"

import { TextFlip as ArkTextFlip } from "@isbatak/ark-text-flip/react"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "styled-system/jsx"
import { textFlip } from "styled-system/recipes"

const { withProvider, withContext } = createSlotRecipeContext(textFlip)

export const TextFlipRoot = withProvider(ArkTextFlip.Root, "root")
export type TextFlipRootProps = ComponentProps<typeof TextFlipRoot>

export const TextFlipItem = withContext(ArkTextFlip.Item, "item")
export type TextFlipItemProps = ComponentProps<typeof TextFlipItem>
