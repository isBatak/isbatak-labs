import { Carousel, useCarouselContext } from "@ark-ui/vue/carousel"
import { type Component, defineComponent, h } from "vue"
import type { ComponentProps } from "vue-component-type-helpers"
import { createSlotRecipeContext } from "@isbatak/vue-ui/jsx"
import { carousel } from "@isbatak/panda-ds/recipes"
import { IconButton } from "../button"
import { Icon, type IconProps } from "../icon"

const { withProvider, withContext } = createSlotRecipeContext(carousel)

export const CarouselRoot = withProvider(Carousel.Root, "root", { forwardProps: ["page"] })
export type CarouselRootProps = ComponentProps<typeof CarouselRoot>

export const CarouselRootProvider = withProvider(Carousel.RootProvider, "root")
export type CarouselRootProviderProps = ComponentProps<typeof CarouselRootProvider>

export const CarouselItemGroup = withContext(Carousel.ItemGroup, "itemGroup")
export type CarouselItemGroupProps = ComponentProps<typeof CarouselItemGroup>

export const CarouselItem = withContext(Carousel.Item, "item")
export type CarouselItemProps = ComponentProps<typeof CarouselItem>

export const CarouselControl = withContext(Carousel.Control, "control")
export type CarouselControlProps = ComponentProps<typeof CarouselControl>

const withDefaultIconButton = <T>(name: string, styled: T, icon: IconProps["name"]) =>
  defineComponent({
    name,
    inheritAttrs: false,
    setup(_, { attrs, slots }) {
      return () =>
        slots.default
          ? h(styled as Component, attrs, slots)
          : h(styled as Component, { asChild: true, ...attrs }, () =>
              h(IconButton, { variant: "ghost", size: "xs" }, () => h(Icon, { name: icon })),
            )
    },
  }) as unknown as T

const StyledCarouselPrevTrigger = withContext(Carousel.PrevTrigger, "prevTrigger")
export type CarouselPrevTriggerProps = ComponentProps<typeof StyledCarouselPrevTrigger>
export const CarouselPrevTrigger = withDefaultIconButton(
  "CarouselPrevTrigger",
  StyledCarouselPrevTrigger,
  "chevron-left",
)

const StyledCarouselNextTrigger = withContext(Carousel.NextTrigger, "nextTrigger")
export type CarouselNextTriggerProps = ComponentProps<typeof StyledCarouselNextTrigger>
export const CarouselNextTrigger = withDefaultIconButton(
  "CarouselNextTrigger",
  StyledCarouselNextTrigger,
  "chevron-right",
)

export const CarouselIndicatorGroup = withContext(Carousel.IndicatorGroup, "indicatorGroup")
export type CarouselIndicatorGroupProps = ComponentProps<typeof CarouselIndicatorGroup>

export const CarouselIndicator = withContext(Carousel.Indicator, "indicator")
export type CarouselIndicatorProps = ComponentProps<typeof CarouselIndicator>

export const CarouselIndicators = defineComponent({
  name: "CarouselIndicators",
  inheritAttrs: false,
  setup(_, { attrs }) {
    const context = useCarouselContext()
    return () =>
      h(CarouselIndicatorGroup as Component, null, () =>
        context.value.pageSnapPoints.map((_, index) =>
          h(CarouselIndicator as Component, { key: index, ...attrs, index }),
        ),
      )
  },
})
export type CarouselIndicatorsProps = Omit<CarouselIndicatorProps, "index">

export const CarouselAutoplayTrigger = withContext(Carousel.AutoplayTrigger, "autoplayTrigger")
export type CarouselAutoplayTriggerProps = ComponentProps<typeof CarouselAutoplayTrigger>

export const CarouselAutoplayIndicator = withContext(Carousel.AutoplayIndicator, "autoplayIndicator")
export type CarouselAutoplayIndicatorProps = ComponentProps<typeof CarouselAutoplayIndicator>

export const CarouselProgressText = withContext(Carousel.ProgressText, "progressText")
export type CarouselProgressTextProps = ComponentProps<typeof CarouselProgressText>

export const CarouselContext = Carousel.Context
export type CarouselContextProps = Carousel.ContextProps
