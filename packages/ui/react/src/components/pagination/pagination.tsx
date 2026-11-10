"use client"

import { ark } from "@ark-ui/react/factory"
import { Pagination, usePaginationContext } from "@ark-ui/react/pagination"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { pagination } from "@isbatak/panda-ds/recipes"

import { Icon } from "../icon/icon"

const { withProvider, withContext } = createSlotRecipeContext(pagination)

export const PaginationRoot = withProvider(Pagination.Root, "root")
export type PaginationRootProps = ComponentProps<typeof PaginationRoot>

export const PaginationRootProvider = withProvider(Pagination.RootProvider, "root")
export type PaginationRootProviderProps = ComponentProps<typeof PaginationRootProvider>

export const PaginationItem = withContext(Pagination.Item, "item")
export type PaginationItemProps = ComponentProps<typeof PaginationItem>

const StyledPaginationEllipsis = withContext(Pagination.Ellipsis, "ellipsis")
export type PaginationEllipsisProps = ComponentProps<typeof StyledPaginationEllipsis>

export function PaginationEllipsis({ children, ...props }: PaginationEllipsisProps) {
  return <StyledPaginationEllipsis {...props}>{children ?? <Icon name="dots" />}</StyledPaginationEllipsis>
}

const StyledPaginationPrevTrigger = withContext(Pagination.PrevTrigger, "prevTrigger")
export type PaginationPrevTriggerProps = ComponentProps<typeof StyledPaginationPrevTrigger>

export function PaginationPrevTrigger({ children, ...props }: PaginationPrevTriggerProps) {
  return (
    <StyledPaginationPrevTrigger {...props}>{children ?? <Icon name="chevron-left" />}</StyledPaginationPrevTrigger>
  )
}

const StyledPaginationNextTrigger = withContext(Pagination.NextTrigger, "nextTrigger")
export type PaginationNextTriggerProps = ComponentProps<typeof StyledPaginationNextTrigger>

export function PaginationNextTrigger({ children, ...props }: PaginationNextTriggerProps) {
  return (
    <StyledPaginationNextTrigger {...props}>{children ?? <Icon name="chevron-right" />}</StyledPaginationNextTrigger>
  )
}

const StyledPaginationFirstTrigger = withContext(Pagination.FirstTrigger, "firstTrigger")
export type PaginationFirstTriggerProps = ComponentProps<typeof StyledPaginationFirstTrigger>

export function PaginationFirstTrigger({ children, ...props }: PaginationFirstTriggerProps) {
  return (
    <StyledPaginationFirstTrigger {...props}>{children ?? <Icon name="chevrons-left" />}</StyledPaginationFirstTrigger>
  )
}

const StyledPaginationLastTrigger = withContext(Pagination.LastTrigger, "lastTrigger")
export type PaginationLastTriggerProps = ComponentProps<typeof StyledPaginationLastTrigger>

export function PaginationLastTrigger({ children, ...props }: PaginationLastTriggerProps) {
  return (
    <StyledPaginationLastTrigger {...props}>{children ?? <Icon name="chevrons-right" />}</StyledPaginationLastTrigger>
  )
}

export type PaginationItemsProps = Omit<PaginationItemProps, "type" | "value" | "children">

export function PaginationItems(props: PaginationItemsProps) {
  const { pages } = usePaginationContext()
  return pages.map((page, index) =>
    page.type === "page" ? (
      <PaginationItem key={index} {...props} type="page" value={page.value}>
        {page.value}
      </PaginationItem>
    ) : (
      <PaginationEllipsis key={index} index={index} />
    ),
  )
}

const StyledPaginationPageText = withContext(ark.span, "pageText")

export type PaginationPageTextFormat = "short" | "compact" | "long"

export type PaginationPageTextProps = ComponentProps<typeof StyledPaginationPageText> & {
  /**
   * How to describe the position: `short` is "2 / 10", `compact` is "2 of 10", and `long` is "11 - 20 of 95".
   * @default "compact"
   */
  format?: PaginationPageTextFormat | undefined
}

export function PaginationPageText({ format = "compact", children, ...props }: PaginationPageTextProps) {
  const { page, totalPages, pageRange, count } = usePaginationContext()
  const text =
    format === "short"
      ? `${page} / ${totalPages}`
      : format === "compact"
        ? `${page} of ${totalPages}`
        : `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`
  return <StyledPaginationPageText {...props}>{children ?? text}</StyledPaginationPageText>
}

export const PaginationContext = Pagination.Context
export type PaginationContextProps = Pagination.ContextProps
