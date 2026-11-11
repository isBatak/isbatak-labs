"use client"

import { Carousel, useCarouselContext } from "@ark-ui/react/carousel"
import type { ComponentProps } from "react"
import { createSlotRecipeContext } from "@isbatak/panda-ds/jsx"
import { carousel } from "@isbatak/panda-ds/recipes"

import { IconButton } from "../button/icon-button"
import { Icon } from "../icon/icon"

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

const StyledCarouselPrevTrigger = withContext(Carousel.PrevTrigger, "prevTrigger")
export type CarouselPrevTriggerProps = ComponentProps<typeof StyledCarouselPrevTrigger>

export function CarouselPrevTrigger({ children, ...props }: CarouselPrevTriggerProps) {
  if (children) return <StyledCarouselPrevTrigger {...props}>{children}</StyledCarouselPrevTrigger>
  return (
    <StyledCarouselPrevTrigger asChild {...props}>
      <IconButton variant="ghost" size="xs">
        <Icon name="chevron-left" />
      </IconButton>
    </StyledCarouselPrevTrigger>
  )
}

const StyledCarouselNextTrigger = withContext(Carousel.NextTrigger, "nextTrigger")
export type CarouselNextTriggerProps = ComponentProps<typeof StyledCarouselNextTrigger>

export function CarouselNextTrigger({ children, ...props }: CarouselNextTriggerProps) {
  if (children) return <StyledCarouselNextTrigger {...props}>{children}</StyledCarouselNextTrigger>
  return (
    <StyledCarouselNextTrigger asChild {...props}>
      <IconButton variant="ghost" size="xs">
        <Icon name="chevron-right" />
      </IconButton>
    </StyledCarouselNextTrigger>
  )
}

export const CarouselIndicatorGroup = withContext(Carousel.IndicatorGroup, "indicatorGroup")
export type CarouselIndicatorGroupProps = ComponentProps<typeof CarouselIndicatorGroup>

export const CarouselIndicator = withContext(Carousel.Indicator, "indicator")
export type CarouselIndicatorProps = ComponentProps<typeof CarouselIndicator>

export type CarouselIndicatorsProps = Omit<CarouselIndicatorProps, "index">

export function CarouselIndicators(props: CarouselIndicatorsProps) {
  const { pageSnapPoints } = useCarouselContext()
  return (
    <CarouselIndicatorGroup>
      {pageSnapPoints.map((_, index) => (
        <CarouselIndicator key={index} {...props} index={index} />
      ))}
    </CarouselIndicatorGroup>
  )
}

export const CarouselAutoplayTrigger = withContext(Carousel.AutoplayTrigger, "autoplayTrigger")
export type CarouselAutoplayTriggerProps = ComponentProps<typeof CarouselAutoplayTrigger>

export const CarouselAutoplayIndicator = withContext(Carousel.AutoplayIndicator, "autoplayIndicator")
export type CarouselAutoplayIndicatorProps = ComponentProps<typeof CarouselAutoplayIndicator>

export const CarouselProgressText = withContext(Carousel.ProgressText, "progressText")
export type CarouselProgressTextProps = ComponentProps<typeof CarouselProgressText>

export const CarouselContext = Carousel.Context
export type CarouselContextProps = Carousel.ContextProps
