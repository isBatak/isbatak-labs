export {
  PaginationRoot as Root,
  PaginationRootProvider as RootProvider,
  PaginationItem as Item,
  PaginationItems as Items,
  PaginationEllipsis as Ellipsis,
  PaginationPrevTrigger as PrevTrigger,
  PaginationNextTrigger as NextTrigger,
  PaginationFirstTrigger as FirstTrigger,
  PaginationLastTrigger as LastTrigger,
  PaginationPageText as PageText,
  PaginationContext as Context,
} from "./pagination"

export type {
  PaginationRootProps as RootProps,
  PaginationRootProviderProps as RootProviderProps,
  PaginationItemProps as ItemProps,
  PaginationItemsProps as ItemsProps,
  PaginationEllipsisProps as EllipsisProps,
  PaginationPrevTriggerProps as PrevTriggerProps,
  PaginationNextTriggerProps as NextTriggerProps,
  PaginationFirstTriggerProps as FirstTriggerProps,
  PaginationLastTriggerProps as LastTriggerProps,
  PaginationPageTextProps as PageTextProps,
  PaginationContextProps as ContextProps,
  PaginationPageTextFormat as PageTextFormat,
} from "./pagination"

export type {
  PaginationPageChangeDetails as PageChangeDetails,
  PaginationPageSizeChangeDetails as PageSizeChangeDetails,
} from "@ark-ui/solid/pagination"
