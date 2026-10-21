import type { ComponentType } from "react"
import { cva } from "styled-system/css"
import { styled } from "styled-system/jsx"

const frame = cva({
  base: {
    position: "relative",
    display: "block",
    width: "full",
    maxWidth: "56",
    aspectRatio: "16 / 10",
    overflow: "hidden",
    borderWidth: "1px",
    borderRadius: "lg",
    bg: "bg",
    boxShadow: "sm",
  },
})

const bar = cva({
  base: {
    display: "block",
    flexShrink: "0",
    borderRadius: "full",
  },
  variants: {
    w: {
      "4": { w: "4" },
      "6": { w: "6" },
      "8": { w: "8" },
      "10": { w: "10" },
      "12": { w: "12" },
      "16": { w: "16" },
      "1/4": { w: "1/4" },
      "1/3": { w: "1/3" },
      "1/2": { w: "1/2" },
      "2/3": { w: "2/3" },
      "3/4": { w: "3/4" },
      full: { w: "full" },
    },
    tone: {
      strong: { bg: "fg/70" },
      muted: { bg: "bg.emphasized" },
      subtle: { bg: "border.emphasized" },
      accent: { bg: "colorPalette.solid" },
      inverted: { bg: "fg.inverted/80" },
    },
    size: {
      sm: { h: "1.5" },
      md: { h: "2" },
    },
  },
  defaultVariants: {
    w: "full",
    tone: "muted",
    size: "sm",
  },
})

const pill = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1",
    flexShrink: "0",
    h: "6",
    px: "2.5",
    borderRadius: "l2",
  },
  variants: {
    variant: {
      solid: { bg: "colorPalette.solid" },
      outline: { borderWidth: "1px", borderColor: "border.emphasized", bg: "bg" },
      subtle: { bg: "bg.muted" },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
})

const panel = cva({
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5",
    p: "2.5",
    borderWidth: "1px",
    borderRadius: "md",
    bg: "bg.panel",
    boxShadow: "md",
  },
  variants: {
    dense: {
      true: {
        gap: "0.5",
        p: "1",
      },
    },
  },
})

const center = cva({
  base: {
    position: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})

function AccordionThumb() {
  return (
    <span className={frame()}>
      <styled.span display="flex" flexDirection="column" px="4" py="3">
        <styled.span display="flex" alignItems="center" justifyContent="space-between" py="2" borderBottomWidth="1px">
          <span className={bar({ w: "1/2", tone: "strong" })} />
          <styled.span
            boxSize="1.5"
            borderBottomWidth="1.5px"
            borderEndWidth="1.5px"
            borderColor="fg.muted"
            rotate="-135deg"
          />
        </styled.span>
        <styled.span display="flex" flexDirection="column" gap="1.5" py="2" borderBottomWidth="1px">
          <span className={bar({ w: "full" })} />
          <span className={bar({ w: "3/4" })} />
        </styled.span>
        <styled.span display="flex" alignItems="center" justifyContent="space-between" py="2" borderBottomWidth="1px">
          <span className={bar({ w: "1/3", tone: "strong" })} />
          <styled.span
            boxSize="1.5"
            borderBottomWidth="1.5px"
            borderEndWidth="1.5px"
            borderColor="fg.muted"
            rotate="45deg"
          />
        </styled.span>
        <styled.span display="flex" alignItems="center" justifyContent="space-between" py="2">
          <span className={bar({ w: "2/3", tone: "strong" })} />
          <styled.span
            boxSize="1.5"
            borderBottomWidth="1.5px"
            borderEndWidth="1.5px"
            borderColor="fg.muted"
            rotate="45deg"
          />
        </styled.span>
      </styled.span>
    </span>
  )
}

function BadgeThumb() {
  return (
    <span className={frame()}>
      <styled.span className={center()} flexWrap="wrap" gap="2" px="6">
        <styled.span display="inline-flex" alignItems="center" h="5" px="2" borderRadius="full" bg="colorPalette.solid">
          <span className={bar({ w: "8", tone: "inverted" })} />
        </styled.span>
        <styled.span display="inline-flex" alignItems="center" h="5" px="2" borderRadius="full" bg="green.subtle">
          <styled.span display="block" w="10" h="1.5" borderRadius="full" bg="green.fg" />
        </styled.span>
        <styled.span display="inline-flex" alignItems="center" h="5" px="2" borderRadius="full" bg="red.subtle">
          <styled.span display="block" w="6" h="1.5" borderRadius="full" bg="red.fg" />
        </styled.span>
        <styled.span display="inline-flex" alignItems="center" h="5" px="2" borderRadius="full" borderWidth="1px">
          <span className={bar({ w: "10", tone: "strong" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function ButtonThumb() {
  return (
    <span className={frame()}>
      <styled.span className={center()} gap="2">
        <span className={pill({ variant: "solid" })}>
          <span className={bar({ w: "10", tone: "inverted" })} />
        </span>
        <span className={pill({ variant: "outline" })}>
          <span className={bar({ w: "8", tone: "strong" })} />
        </span>
      </styled.span>
    </span>
  )
}

function DrawerThumb() {
  return (
    <span className={frame()}>
      <styled.span position="absolute" inset="0" bg="blackAlpha.500" />
      <styled.span
        position="absolute"
        insetX="3"
        bottom="0"
        display="grid"
        justifyItems="start"
        gap="2"
        px="3"
        pt="2"
        pb="4"
        borderTopRadius="lg"
        bg="bg.panel"
        boxShadow="lg"
      >
        <styled.span justifySelf="center" className={bar({ w: "8", tone: "subtle" })} />
        <span className={bar({ w: "1/2", tone: "strong", size: "md" })} />
        <span className={bar({ w: "3/4" })} />
      </styled.span>
    </span>
  )
}

function TableThumb() {
  return (
    <span className={frame()}>
      <styled.span display="grid" gridTemplateColumns="2fr 1fr 1fr" alignItems="center">
        <styled.span px="3" py="2.5" bg="bg.muted" borderBottomWidth="1px">
          <span className={bar({ w: "2/3", tone: "strong" })} />
        </styled.span>
        <styled.span px="3" py="2.5" bg="bg.muted" borderBottomWidth="1px">
          <span className={bar({ w: "3/4", tone: "strong" })} />
        </styled.span>
        <styled.span px="3" py="2.5" bg="bg.muted" borderBottomWidth="1px">
          <span className={bar({ w: "1/2", tone: "strong" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px">
          <span className={bar({ w: "3/4" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px">
          <span className={bar({ w: "1/2" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px">
          <span className={bar({ w: "2/3" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px">
          <span className={bar({ w: "1/2" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px">
          <span className={bar({ w: "2/3" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px">
          <span className={bar({ w: "1/3" })} />
        </styled.span>
        <styled.span px="3" py="2.5">
          <span className={bar({ w: "2/3" })} />
        </styled.span>
        <styled.span px="3" py="2.5">
          <span className={bar({ w: "1/3" })} />
        </styled.span>
        <styled.span px="3" py="2.5">
          <span className={bar({ w: "1/2" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function GridTableThumb() {
  return (
    <span className={frame()}>
      <styled.span display="grid" gridTemplateColumns="auto 1fr auto" alignItems="center">
        <styled.span px="3" py="2.5" bg="bg.muted" borderBottomWidth="1px" borderEndWidth="1px">
          <span className={bar({ w: "6", tone: "strong" })} />
        </styled.span>
        <styled.span px="3" py="2.5" bg="bg.muted" borderBottomWidth="1px" borderEndWidth="1px">
          <span className={bar({ w: "1/2", tone: "strong" })} />
        </styled.span>
        <styled.span px="3" py="2.5" bg="bg.muted" borderBottomWidth="1px">
          <span className={bar({ w: "8", tone: "strong" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px" borderEndWidth="1px">
          <styled.span display="block" boxSize="3" borderRadius="sm" bg="colorPalette.solid" />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px" borderEndWidth="1px">
          <span className={bar({ w: "3/4" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px">
          <span className={bar({ w: "8" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px" borderEndWidth="1px" bg="colorPalette.subtle">
          <styled.span display="block" boxSize="3" borderRadius="sm" bg="colorPalette.solid" />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px" borderEndWidth="1px" bg="colorPalette.subtle">
          <span className={bar({ w: "2/3" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderBottomWidth="1px" bg="colorPalette.subtle">
          <span className={bar({ w: "6" })} />
        </styled.span>
        <styled.span px="3" py="2.5" borderEndWidth="1px">
          <styled.span
            display="block"
            boxSize="3"
            borderRadius="sm"
            borderWidth="1px"
            borderColor="border.emphasized"
          />
        </styled.span>
        <styled.span px="3" py="2.5" borderEndWidth="1px">
          <span className={bar({ w: "1/2" })} />
        </styled.span>
        <styled.span px="3" py="2.5">
          <span className={bar({ w: "8" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function GroupThumb() {
  return (
    <span className={frame()}>
      <span className={center()}>
        <styled.span
          display="inline-flex"
          borderWidth="1px"
          borderColor="border.emphasized"
          borderRadius="l2"
          overflow="hidden"
        >
          <styled.span
            display="inline-flex"
            alignItems="center"
            h="6"
            px="3"
            borderEndWidth="1px"
            borderColor="border.emphasized"
            bg="bg.muted"
          >
            <span className={bar({ w: "6", tone: "strong" })} />
          </styled.span>
          <styled.span
            display="inline-flex"
            alignItems="center"
            h="6"
            px="3"
            borderEndWidth="1px"
            borderColor="border.emphasized"
          >
            <span className={bar({ w: "8", tone: "strong" })} />
          </styled.span>
          <styled.span display="inline-flex" alignItems="center" h="6" px="3">
            <span className={bar({ w: "6", tone: "strong" })} />
          </styled.span>
        </styled.span>
      </span>
    </span>
  )
}

function HoverCardThumb() {
  return (
    <span className={frame()}>
      <styled.span position="absolute" top="4" insetStart="5" display="flex" alignItems="center" gap="1.5">
        <styled.span display="block" w="12" h="1.5" borderRadius="full" bg="colorPalette.solid" />
      </styled.span>
      <styled.span className={panel()} position="absolute" top="8" insetStart="4" w="3/4">
        <styled.span display="flex" alignItems="center" gap="2">
          <styled.span display="block" boxSize="6" borderRadius="full" bg="bg.emphasized" />
          <styled.span display="flex" flexDirection="column" gap="1" flex="1">
            <span className={bar({ w: "2/3", tone: "strong" })} />
            <span className={bar({ w: "1/3" })} />
          </styled.span>
        </styled.span>
        <span className={bar({ w: "full" })} />
        <span className={bar({ w: "3/4" })} />
      </styled.span>
    </span>
  )
}

function LoaderThumb() {
  return (
    <span className={frame()}>
      <styled.span className={center()} gap="2">
        <styled.span
          display="inline-flex"
          alignItems="center"
          gap="2"
          h="7"
          px="3"
          borderRadius="l2"
          bg="colorPalette.solid"
          opacity="0.7"
        >
          <styled.span
            display="block"
            boxSize="3"
            borderRadius="full"
            borderWidth="2px"
            borderColor="fg.inverted/80"
            borderTopColor="transparent"
          />
          <span className={bar({ w: "10", tone: "inverted" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function MenuThumb() {
  return (
    <span className={frame()}>
      <styled.span position="absolute" top="3" insetStart="4" className={pill({ variant: "outline" })}>
        <span className={bar({ w: "8", tone: "strong" })} />
      </styled.span>
      <styled.span className={panel({ dense: true })} position="absolute" top="11" insetStart="4" w="1/2">
        <styled.span display="flex" px="2" py="1.5" borderRadius="sm" bg="bg.muted">
          <span className={bar({ w: "2/3", tone: "strong" })} />
        </styled.span>
        <styled.span display="flex" px="2" py="1.5">
          <span className={bar({ w: "1/2" })} />
        </styled.span>
        <styled.span display="flex" px="2" py="1.5">
          <span className={bar({ w: "3/4" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function PopoverThumb() {
  return (
    <span className={frame()}>
      <styled.span
        position="absolute"
        bottom="4"
        insetStart="50%"
        translate="-50% 0"
        className={pill({ variant: "outline" })}
      >
        <span className={bar({ w: "10", tone: "strong" })} />
      </styled.span>
      <styled.span className={panel()} position="absolute" top="3" insetStart="50%" translate="-50% 0" w="2/3">
        <span className={bar({ w: "1/2", tone: "strong", size: "md" })} />
        <span className={bar({ w: "full" })} />
        <span className={bar({ w: "2/3" })} />
        <styled.span
          position="absolute"
          bottom="-1.5"
          insetStart="50%"
          boxSize="3"
          translate="-50% 0"
          rotate="45deg"
          bg="bg.panel"
          borderBottomWidth="1px"
          borderEndWidth="1px"
        />
      </styled.span>
    </span>
  )
}

function RadioCardThumb() {
  return (
    <span className={frame()}>
      <styled.span className={center()} gap="2" px="4">
        <styled.span
          display="flex"
          flexDirection="column"
          gap="2"
          flex="1"
          p="2.5"
          borderWidth="2px"
          borderColor="colorPalette.solid"
          borderRadius="md"
        >
          <styled.span display="flex" alignItems="center" justifyContent="space-between">
            <span className={bar({ w: "1/2", tone: "strong" })} />
            <styled.span display="grid" placeItems="center" boxSize="3" borderRadius="full" bg="colorPalette.solid">
              <styled.span display="block" boxSize="1" borderRadius="full" bg="fg.inverted" />
            </styled.span>
          </styled.span>
          <span className={bar({ w: "3/4" })} />
        </styled.span>
        <styled.span display="flex" flexDirection="column" gap="2" flex="1" p="2.5" borderWidth="1px" borderRadius="md">
          <styled.span display="flex" alignItems="center" justifyContent="space-between">
            <span className={bar({ w: "1/3", tone: "strong" })} />
            <styled.span
              display="block"
              boxSize="3"
              borderRadius="full"
              borderWidth="1px"
              borderColor="border.emphasized"
            />
          </styled.span>
          <span className={bar({ w: "2/3" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function SegmentGroupThumb() {
  return (
    <span className={frame()}>
      <span className={center()}>
        <styled.span display="inline-flex" gap="1" p="1" borderRadius="l2" bg="bg.muted">
          <styled.span display="inline-flex" alignItems="center" h="5" px="3" borderRadius="l1" bg="bg" boxShadow="xs">
            <span className={bar({ w: "8", tone: "strong" })} />
          </styled.span>
          <styled.span display="inline-flex" alignItems="center" h="5" px="3">
            <span className={bar({ w: "6", tone: "subtle" })} />
          </styled.span>
          <styled.span display="inline-flex" alignItems="center" h="5" px="3">
            <span className={bar({ w: "8", tone: "subtle" })} />
          </styled.span>
        </styled.span>
      </span>
    </span>
  )
}

function SelectThumb() {
  return (
    <span className={frame()}>
      <styled.span
        position="absolute"
        top="3"
        insetX="5"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        h="7"
        px="2.5"
        borderWidth="1px"
        borderColor="border.emphasized"
        borderRadius="l2"
      >
        <span className={bar({ w: "1/3", tone: "strong" })} />
        <styled.span
          boxSize="1.5"
          borderBottomWidth="1.5px"
          borderEndWidth="1.5px"
          borderColor="fg.muted"
          rotate="-135deg"
        />
      </styled.span>
      <styled.span className={panel({ dense: true })} position="absolute" top="12" insetX="5">
        <styled.span display="flex" px="2" py="1.5">
          <span className={bar({ w: "1/3" })} />
        </styled.span>
        <styled.span
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px="2"
          py="1.5"
          borderRadius="sm"
          bg="bg.muted"
        >
          <span className={bar({ w: "1/2", tone: "strong" })} />
          <styled.span
            w="2"
            h="1"
            borderBottomWidth="1.5px"
            borderStartWidth="1.5px"
            borderColor="fg"
            rotate="-45deg"
          />
        </styled.span>
        <styled.span display="flex" px="2" py="1.5">
          <span className={bar({ w: "1/4" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function SliderThumb() {
  return (
    <span className={frame()}>
      <styled.span className={center()} flexDirection="column" gap="3" px="6">
        <styled.span display="flex" justifyContent="space-between" w="full">
          <span className={bar({ w: "1/4", tone: "strong" })} />
          <span className={bar({ w: "6" })} />
        </styled.span>
        <styled.span position="relative" display="block" w="full" h="1.5" borderRadius="full" bg="bg.emphasized">
          <styled.span
            position="absolute"
            insetY="0"
            insetStart="0"
            w="3/5"
            borderRadius="full"
            bg="colorPalette.solid"
          />
          <styled.span
            position="absolute"
            top="50%"
            insetStart="60%"
            boxSize="4"
            translate="-50% -50%"
            borderRadius="full"
            borderWidth="2px"
            borderColor="colorPalette.solid"
            bg="bg"
            boxShadow="sm"
          />
        </styled.span>
      </styled.span>
    </span>
  )
}

function SpinnerThumb() {
  return (
    <span className={frame()}>
      <styled.span className={center()} gap="4">
        <styled.span
          display="block"
          boxSize="5"
          borderRadius="full"
          borderWidth="2px"
          borderColor="colorPalette.solid"
          borderTopColor="transparent"
        />
        <styled.span
          display="block"
          boxSize="7"
          borderRadius="full"
          borderWidth="2.5px"
          borderColor="fg/70"
          borderInlineStartColor="transparent"
        />
        <styled.span
          display="block"
          boxSize="9"
          borderRadius="full"
          borderWidth="3px"
          borderColor="bg.emphasized"
          borderTopColor="colorPalette.solid"
        />
      </styled.span>
    </span>
  )
}

function SwitchThumb() {
  return (
    <span className={frame()}>
      <styled.span className={center()} flexDirection="column" gap="3">
        <styled.span display="flex" alignItems="center" gap="2.5">
          <styled.span position="relative" display="block" w="9" h="5" borderRadius="full" bg="colorPalette.solid">
            <styled.span position="absolute" top="0.5" insetEnd="0.5" boxSize="4" borderRadius="full" bg="bg" />
          </styled.span>
          <span className={bar({ w: "16", tone: "strong" })} />
        </styled.span>
        <styled.span display="flex" alignItems="center" gap="2.5">
          <styled.span position="relative" display="block" w="9" h="5" borderRadius="full" bg="bg.emphasized">
            <styled.span position="absolute" top="0.5" insetStart="0.5" boxSize="4" borderRadius="full" bg="bg" />
          </styled.span>
          <span className={bar({ w: "12", tone: "strong" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function TabsThumb() {
  return (
    <span className={frame()}>
      <styled.span display="flex" gap="4" px="4" borderBottomWidth="1px">
        <styled.span display="flex" alignItems="center" h="9" borderBottomWidth="2px" borderColor="fg">
          <span className={bar({ w: "8", tone: "strong" })} />
        </styled.span>
        <styled.span display="flex" alignItems="center" h="9">
          <span className={bar({ w: "10", tone: "subtle" })} />
        </styled.span>
        <styled.span display="flex" alignItems="center" h="9">
          <span className={bar({ w: "6", tone: "subtle" })} />
        </styled.span>
      </styled.span>
      <styled.span display="flex" flexDirection="column" gap="2" p="4">
        <span className={bar({ w: "full" })} />
        <span className={bar({ w: "3/4" })} />
        <span className={bar({ w: "1/2" })} />
      </styled.span>
    </span>
  )
}

function TocThumb() {
  return (
    <span className={frame()}>
      <styled.span display="grid" gridTemplateColumns="1fr 5rem" gap="4" h="full" p="4">
        <styled.span display="flex" flexDirection="column" gap="1.5">
          <span className={bar({ w: "1/2", tone: "strong", size: "md" })} />
          <span className={bar({ w: "full" })} />
          <span className={bar({ w: "3/4" })} />
          <styled.span mt="2" className={bar({ w: "1/3", tone: "strong", size: "md" })} />
          <span className={bar({ w: "full" })} />
          <span className={bar({ w: "2/3" })} />
        </styled.span>
        <styled.span position="relative" display="flex" flexDirection="column" gap="2.5" ps="3" borderStartWidth="1px">
          <styled.span position="absolute" insetStart="-1px" top="5" h="5" w="2px" borderRadius="full" bg="fg" />
          <span className={bar({ w: "3/4" })} />
          <span className={bar({ w: "2/3", tone: "strong" })} />
          <styled.span ms="2" className={bar({ w: "1/2", tone: "strong" })} />
          <span className={bar({ w: "3/4" })} />
        </styled.span>
      </styled.span>
    </span>
  )
}

function TooltipThumb() {
  return (
    <span className={frame()}>
      <styled.span className={center()} flexDirection="column" gap="2.5">
        <styled.span position="relative" display="flex" alignItems="center" h="6" px="2.5" borderRadius="md" bg="fg">
          <span className={bar({ w: "16", tone: "inverted" })} />
          <styled.span
            position="absolute"
            bottom="-1"
            insetStart="50%"
            boxSize="2"
            translate="-50% 0"
            rotate="45deg"
            bg="fg"
          />
        </styled.span>
        <span className={pill({ variant: "outline" })}>
          <span className={bar({ w: "8", tone: "strong" })} />
        </span>
      </styled.span>
    </span>
  )
}

function TourThumb() {
  return (
    <span className={frame()}>
      <styled.span display="flex" flexDirection="column" gap="1.5" p="4">
        <span className={bar({ w: "1/3", tone: "strong", size: "md" })} />
        <span className={bar({ w: "full" })} />
        <span className={bar({ w: "3/4" })} />
      </styled.span>
      <styled.span position="absolute" inset="0" bg="blackAlpha.500" />
      <styled.span
        position="absolute"
        top="14"
        insetStart="4"
        className={pill({ variant: "solid" })}
        outline="2px solid"
        outlineColor="bg"
        outlineOffset="2px"
      >
        <span className={bar({ w: "8", tone: "inverted" })} />
      </styled.span>
      <styled.span className={panel()} position="absolute" top="12" insetEnd="3" w="1/2">
        <span className={bar({ w: "2/3", tone: "strong" })} />
        <span className={bar({ w: "full" })} />
        <styled.span display="flex" alignItems="center" justifyContent="space-between" mt="1">
          <styled.span display="flex" gap="1">
            <styled.span display="block" boxSize="1.5" borderRadius="full" bg="fg" />
            <styled.span display="block" boxSize="1.5" borderRadius="full" bg="border.emphasized" />
            <styled.span display="block" boxSize="1.5" borderRadius="full" bg="border.emphasized" />
          </styled.span>
          <styled.span display="block" w="6" h="3" borderRadius="sm" bg="colorPalette.solid" />
        </styled.span>
      </styled.span>
    </span>
  )
}

function CodePreviewThumb() {
  return (
    <span className={frame()}>
      <styled.span display="flex" h="3/5" borderBottomWidth="1px">
        <styled.span display="flex" alignItems="center" justifyContent="center" flex="1">
          <span className={pill({ variant: "solid" })}>
            <span className={bar({ w: "10", tone: "inverted" })} />
          </span>
        </styled.span>
        <styled.span display="grid" placeItems="center" w="4" borderStartWidth="1px">
          <styled.span display="block" w="0.5" h="4" borderRadius="full" bg="border.emphasized" />
        </styled.span>
      </styled.span>
      <styled.span display="flex" flexDirection="column" gap="1.5" px="3" py="2.5" bg="bg.subtle">
        <span className={bar({ w: "1/2", tone: "accent" })} />
        <span className={bar({ w: "3/4" })} />
      </styled.span>
    </span>
  )
}

export const staticThumbnails: Record<string, ComponentType> = {
  accordion: AccordionThumb,
  badge: BadgeThumb,
  button: ButtonThumb,
  "code-preview": CodePreviewThumb,
  drawer: DrawerThumb,
  "grid-table": GridTableThumb,
  group: GroupThumb,
  "hover-card": HoverCardThumb,
  loader: LoaderThumb,
  menu: MenuThumb,
  popover: PopoverThumb,
  "radio-card": RadioCardThumb,
  "segment-group": SegmentGroupThumb,
  select: SelectThumb,
  slider: SliderThumb,
  spinner: SpinnerThumb,
  switch: SwitchThumb,
  table: TableThumb,
  tabs: TabsThumb,
  toc: TocThumb,
  tooltip: TooltipThumb,
  tour: TourThumb,
}
