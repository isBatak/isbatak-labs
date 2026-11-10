import { Pagination } from "@ark-ui/svelte/pagination"

export { default as PaginationRoot, type PaginationRootProps } from "./pagination-root.svelte"
export { default as PaginationRootProvider, type PaginationRootProviderProps } from "./pagination-root-provider.svelte"
export { default as PaginationItem, type PaginationItemProps } from "./pagination-item.svelte"
export { default as PaginationItems, type PaginationItemsProps } from "./pagination-items.svelte"
export { default as PaginationEllipsis, type PaginationEllipsisProps } from "./pagination-ellipsis.svelte"
export { default as PaginationPrevTrigger, type PaginationPrevTriggerProps } from "./pagination-prev-trigger.svelte"
export { default as PaginationNextTrigger, type PaginationNextTriggerProps } from "./pagination-next-trigger.svelte"
export { default as PaginationFirstTrigger, type PaginationFirstTriggerProps } from "./pagination-first-trigger.svelte"
export { default as PaginationLastTrigger, type PaginationLastTriggerProps } from "./pagination-last-trigger.svelte"
export {
  default as PaginationPageText,
  type PaginationPageTextProps,
  type PaginationPageTextFormat,
} from "./pagination-page-text.svelte"
export const PaginationContext = Pagination.Context
export type PaginationContextProps = Pagination.ContextProps
