import { ark } from "@ark-ui/vue/factory"
import { Pagination, usePaginationContext } from "@ark-ui/vue/pagination"
import { type Component, type PropType, computed, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { pagination } from "@isbatak/panda-ds/recipes"
import { Icon, type IconProps } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(pagination)

export const PaginationRoot = withProvider(Pagination.Root, "root")
export type PaginationRootProps = ComponentProps<typeof PaginationRoot>

export const PaginationRootProvider = withProvider(Pagination.RootProvider, "root")
export type PaginationRootProviderProps = ComponentProps<typeof PaginationRootProvider>

export const PaginationItem = withContext(Pagination.Item, "item")
export type PaginationItemProps = ComponentProps<typeof PaginationItem>

const withDefaultIcon = <T>(name: string, styled: T, icon: IconProps["name"]) =>
  defineComponent({
    name,
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      return () => h(styled as Component, attrs, () => slots.default?.() ?? h(Icon, { name: icon }))
    },
  }) as unknown as T

const StyledPaginationEllipsis = withContext(Pagination.Ellipsis, "ellipsis")
export type PaginationEllipsisProps = ComponentProps<typeof StyledPaginationEllipsis>
export const PaginationEllipsis = withDefaultIcon("PaginationEllipsis", StyledPaginationEllipsis, "dots")

const StyledPaginationPrevTrigger = withContext(Pagination.PrevTrigger, "prevTrigger")
export type PaginationPrevTriggerProps = ComponentProps<typeof StyledPaginationPrevTrigger>
export const PaginationPrevTrigger = withDefaultIcon(
  "PaginationPrevTrigger",
  StyledPaginationPrevTrigger,
  "chevron-left",
)

const StyledPaginationNextTrigger = withContext(Pagination.NextTrigger, "nextTrigger")
export type PaginationNextTriggerProps = ComponentProps<typeof StyledPaginationNextTrigger>
export const PaginationNextTrigger = withDefaultIcon(
  "PaginationNextTrigger",
  StyledPaginationNextTrigger,
  "chevron-right",
)

const StyledPaginationFirstTrigger = withContext(Pagination.FirstTrigger, "firstTrigger")
export type PaginationFirstTriggerProps = ComponentProps<typeof StyledPaginationFirstTrigger>
export const PaginationFirstTrigger = withDefaultIcon(
  "PaginationFirstTrigger",
  StyledPaginationFirstTrigger,
  "chevrons-left",
)

const StyledPaginationLastTrigger = withContext(Pagination.LastTrigger, "lastTrigger")
export type PaginationLastTriggerProps = ComponentProps<typeof StyledPaginationLastTrigger>
export const PaginationLastTrigger = withDefaultIcon(
  "PaginationLastTrigger",
  StyledPaginationLastTrigger,
  "chevrons-right",
)

export const PaginationItems = defineComponent({
  name: "PaginationItems",
  inheritAttrs: false,
  setup(_, { attrs }) {
    const context = usePaginationContext()
    return () =>
      context.value.pages.map((page, index) =>
        page.type === "page"
          ? h(PaginationItem as Component, { key: index, ...attrs, type: "page", value: page.value }, () => page.value)
          : h(PaginationEllipsis as Component, { key: index, index }),
      )
  },
})
export type PaginationItemsProps = Omit<PaginationItemProps, "type" | "value">

const StyledPaginationPageText = withContext(ark.span, "pageText")

export type PaginationPageTextFormat = "short" | "compact" | "long"

export const PaginationPageText = defineComponent({
  name: "PaginationPageText",
  inheritAttrs: false,
  props: {
    format: { type: String as PropType<PaginationPageTextFormat>, default: "compact" },
  },
  setup(props, { attrs, slots }) {
    const context = usePaginationContext()
    const text = computed(() => {
      const { page, totalPages, pageRange, count } = context.value
      if (props.format === "short") return `${page} / ${totalPages}`
      if (props.format === "compact") return `${page} of ${totalPages}`
      return `${pageRange.start + 1} - ${Math.min(pageRange.end, count)} of ${count}`
    })
    return () => h(StyledPaginationPageText as Component, attrs, () => slots.default?.() ?? text.value)
  },
})
export type PaginationPageTextProps = ComponentProps<typeof StyledPaginationPageText> & {
  format?: PaginationPageTextFormat | undefined
}

export const PaginationContext = Pagination.Context
export type PaginationContextProps = Pagination.ContextProps
