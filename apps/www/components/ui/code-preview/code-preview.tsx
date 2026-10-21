"use client"

import { CodePreview as ArkCodePreview } from "@isbatak/ark-code-preview/react"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "styled-system/jsx"
import { codePreview } from "styled-system/recipes"

const { withProvider, withContext } = createSlotRecipeContext(codePreview)

export const CodePreviewRoot = withProvider(ArkCodePreview.Root, "root")
export type CodePreviewRootProps = ComponentProps<typeof CodePreviewRoot>

export const CodePreviewStage = withContext(ArkCodePreview.Stage, "stage")
export type CodePreviewStageProps = ComponentProps<typeof CodePreviewStage>

export const CodePreviewPreview = withContext(ArkCodePreview.Preview, "preview")
export type CodePreviewPreviewProps = ComponentProps<typeof CodePreviewPreview>

export const CodePreviewResizer = withContext(ArkCodePreview.Resizer, "resizer")
export type CodePreviewResizerProps = ComponentProps<typeof CodePreviewResizer>

export const CodePreviewContent = withContext(ArkCodePreview.Content, "content")
export type CodePreviewContentProps = ComponentProps<typeof CodePreviewContent>

export const CodePreviewToolbar = withContext(ArkCodePreview.Toolbar, "toolbar")
export type CodePreviewToolbarProps = ComponentProps<typeof CodePreviewToolbar>

export const CodePreviewTrigger = withContext(ArkCodePreview.Trigger, "trigger")
export type CodePreviewTriggerProps = ComponentProps<typeof CodePreviewTrigger>

export const CodePreviewThemeTrigger = withContext(ArkCodePreview.ThemeTrigger, "themeTrigger")
export type CodePreviewThemeTriggerProps = ComponentProps<typeof CodePreviewThemeTrigger>

export const CodePreviewDirTrigger = withContext(ArkCodePreview.DirTrigger, "dirTrigger")
export type CodePreviewDirTriggerProps = ComponentProps<typeof CodePreviewDirTrigger>

export const CodePreviewCopyTrigger = withContext(ArkCodePreview.CopyTrigger, "copyTrigger")
export type CodePreviewCopyTriggerProps = ComponentProps<typeof CodePreviewCopyTrigger>

export const CodePreviewContext = ArkCodePreview.Context
