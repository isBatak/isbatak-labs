import { ark } from "@ark-ui/solid/factory"
import { Pagination, usePaginationContext } from "@ark-ui/solid/pagination"
import { type ComponentProps, For, splitProps } from "solid-js"
import { createSlotRecipeContext } from "@isbatak/solid-ui/jsx"
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

export function PaginationEllipsis(props: PaginationEllipsisProps) {
  const [local, rest] = splitProps(props, ["children"])
  return <StyledPaginationEllipsis {...rest}>{local.children ?? <Icon name="dots" />}</StyledPaginationEllipsis>
}

const StyledPaginationPrevTrigger = withContext(Pagination.PrevTrigger, "prevTrigger")
export type PaginationPrevTriggerProps = ComponentProps<typeof StyledPaginationPrevTrigger>

export function PaginationPrevTrigger(props: PaginationPrevTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledPaginationPrevTrigger {...rest}>
      {local.children ?? <Icon name="chevron-left" />}
    </StyledPaginationPrevTrigger>
  )
}

const StyledPaginationNextTrigger = withContext(Pagination.NextTrigger, "nextTrigger")
export type PaginationNextTriggerProps = ComponentProps<typeof StyledPaginationNextTrigger>

export function PaginationNextTrigger(props: PaginationNextTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledPaginationNextTrigger {...rest}>
      {local.children ?? <Icon name="chevron-right" />}
    </StyledPaginationNextTrigger>
  )
}

const StyledPaginationFirstTrigger = withContext(Pagination.FirstTrigger, "firstTrigger")
export type PaginationFirstTriggerProps = ComponentProps<typeof StyledPaginationFirstTrigger>

export function PaginationFirstTrigger(props: PaginationFirstTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledPaginationFirstTrigger {...rest}>
      {local.children ?? <Icon name="chevrons-left" />}
    </StyledPaginationFirstTrigger>
  )
}

const StyledPaginationLastTrigger = withContext(Pagination.LastTrigger, "lastTrigger")
export type PaginationLastTriggerProps = ComponentProps<typeof StyledPaginationLastTrigger>

export function PaginationLastTrigger(props: PaginationLastTriggerProps) {
  const [local, rest] = splitProps(props, ["children"])
  return (
    <StyledPaginationLastTrigger {...rest}>
      {local.children ?? <Icon name="chevrons-right" />}
    </StyledPaginationLastTrigger>
  )
}

export type PaginationItemsProps = Omit<PaginationItemProps, "type" | "value" | "children">

export function PaginationItems(props: PaginationItemsProps) {
  const context = usePaginationContext()
  return (
    <For each={context().pages}>
      {(page, index) =>
        page.type === "page" ? (
          <PaginationItem {...props} type="page" value={page.value}>
            {page.value}
          </PaginationItem>
        ) : (
          <PaginationEllipsis index={index()} />
        )
      }
    </For>
  )
}

const StyledPaginationPageText = withContext(ark.span, "pageText")

export type PaginationPageTextFormat = "short" | "compact" | "long"

export type PaginationPageTextProps = ComponentProps<typeof StyledPaginationPageText> & {
  format?: PaginationPageTextFormat | undefined
}

export function PaginationPageText(props: PaginationPageTextProps) {
  const [local, rest] = splitProps(props, ["format", "children"])
  const context = usePaginationContext()
  const text = () => {
    const { page, totalPages, pageRange, count } = context()
    const format = local.format ?? "compact"
    if (format === "short") return `${page} / ${totalPages}`
    if (format === "compact") return `${page} of ${totalPages}`
    return `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`
  }
  return <StyledPaginationPageText {...rest}>{local.children ?? text()}</StyledPaginationPageText>
}

export const PaginationContext = Pagination.Context
export type PaginationContextProps = Pagination.ContextProps
