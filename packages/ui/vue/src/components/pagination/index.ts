export {
  PaginationRoot,
  PaginationRootProvider,
  PaginationItem,
  PaginationItems,
  PaginationEllipsis,
  PaginationPrevTrigger,
  PaginationNextTrigger,
  PaginationFirstTrigger,
  PaginationLastTrigger,
  PaginationPageText,
  PaginationContext,
} from "./pagination"

export type {
  PaginationRootProps,
  PaginationRootProviderProps,
  PaginationItemProps,
  PaginationItemsProps,
  PaginationEllipsisProps,
  PaginationPrevTriggerProps,
  PaginationNextTriggerProps,
  PaginationFirstTriggerProps,
  PaginationLastTriggerProps,
  PaginationPageTextProps,
  PaginationContextProps,
  PaginationPageTextFormat,
} from "./pagination"

export { usePagination, usePaginationContext } from "@ark-ui/vue/pagination"
export type {
  PaginationPageChangeDetails,
  PaginationPageSizeChangeDetails,
  UsePaginationProps,
  UsePaginationReturn,
} from "@ark-ui/vue/pagination"

export * as Pagination from "./namespace"
